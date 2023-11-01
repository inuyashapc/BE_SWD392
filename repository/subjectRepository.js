import { User,Subject } from "../model/indexModel.js";

const createNewSubject = async (newSubjectData) => {
  try {
    const newSubject = await Subject.create(newSubjectData);
    return newSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllSubject = async () => {
  try {
    const allSubject = await Subject.findAll({
      include: [
        {
          model: User,
          as: "Manager",
          attributes: ["user_id", "full_name", "email"],
        },
      ],
    });
    return allSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getSubjectbyId = async (subject_id) => {
  try {
    const getSubjectbyId = await Subject.findOne({
      where: { subject_id: subject_id },
      include: [
        {
          model: User,
          as: 'Manager',
          attributes: ['user_id', 'full_name'], 
        },
      ],
    });
    return getSubjectbyId;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
export default { createNewSubject, getAllSubject, getSubjectbyId };
