import { Class, Subject, User } from "../model/indexModel.js";

const createNewClass = async (classData) => {
  try {
    const parseDate = { ...classData, class_status: true };
    console.log(parseDate);
    const newClass = await Class.create(parseDate);
    return newClass;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllClass = async () => {
  try {
    const result = await Class.findAll({
      include: [
        {
          model: Subject,
          as: "Subject",
          attributes: ["subject_id", "subject_code", "subject_name"],
        },
        {
          model: User,
          as: "Teacher",
          attributes: ["user_id", "full_name", "email"],
        },
      ],
    });
    console.log("🚀 ========= result:", result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default {
  createNewClass,
  getAllClass,
};
