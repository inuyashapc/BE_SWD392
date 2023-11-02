import { Class, Semester, Subject, User } from "../model/indexModel.js";

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
        {
          model: Semester,
          as: "Semester",
          attributes: ["semester_id", "semester_name"],
        },
      ],
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getClassDetail = async (id) => {
  try {
    const result = await Class.findOne({
      class_id: id,
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
        {
          model: Semester,
          as: "Semester",
          attributes: ["semester_id", "semester_name"],
        },
      ],
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateClass = async (id, updatedData) => {
  console.log("🚀 ========= updatedData:", updatedData);
  const classDetail = await Class.findOne({
    where: {
      class_id: id,
    },
  });

  // Nếu không tìm thấy classDetail, ném một lỗi
  if (!classDetail) {
    throw new Error(`classDetail with id ${id} not found.`);
  }

  // Cập nhật các trường của classDetail với dữ liệu mới
  await classDetail.update(updatedData);

  // Trả về classDetail đã được cập nhật
  return classDetail;
};

const changeStatus = async (id) => {
  const classDetail = await Class.findOne({
    where: {
      class_id: id,
    },
  });
  if (!classDetail) {
    throw new Error(`classDetail with id ${id} not found.`);
  }
  await classDetail.update({ class_status: !classDetail.class_status });
  return classDetail;
};
export default {
  createNewClass,
  getAllClass,
  getClassDetail,
  updateClass,
  changeStatus,
};
