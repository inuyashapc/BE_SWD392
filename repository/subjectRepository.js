import { User, Subject } from "../model/IndexModel.js";

const createNewSubject = async (newSubjectData) => {
  try {
    const newSubject = await Subject.create(newSubjectData);

    return newSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllSubject = async (sortColumn, sortOrder) => {
  try {
    const allSubject = await Subject.findAll({
      where: { isDeleted: false },
      include: [
        {
          model: User,
          as: "Manager",
          attributes: ["user_id", "full_name", "email"],
        },
      ],
      order: [[sortColumn, sortOrder]],
    });
    return allSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getSubjectbyId = async (subject_id) => {
  try {
    const getSubjectbyId = await Subject.findOne({
      where: { subject_id: subject_id, isDeleted: false },
      include: [
        {
          model: User,
          as: "Manager",
          attributes: ["user_id", "full_name"],
        },
      ],
    });
    return getSubjectbyId;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const changeActiveSubject = async (sortColumn, sortOrder, subject_id) => {
  try {
    const subject = await Subject.findByPk(subject_id);

    if (subject) {
      subject.isActived = !subject.isActived;

      await subject.save();
      const newList = await getAllSubject(sortColumn, sortOrder);

      return newList;
    } else {
      throw new Error("Không tìm thấy môn học với subject_id cụ thể");
    }
  } catch (error) {
    throw error;
  }
};

const softDeleteSubject = async (sortColumn, sortOrder, subject_id) => {
  try {
    const subject = await Subject.findByPk(subject_id);

    if (subject) {
      subject.isDeleted = !subject.isDeleted;
      await subject.save();

      const newList = await getAllSubject(sortColumn, sortOrder);

      return newList;
    } else {
      throw new Error("Không tìm thấy môn học với subject_id cụ thể");
    }
  } catch (error) {
    throw error;
  }
};

const updatedSubject = async (subjectData) => {
  try {
    const existingSubject = await Subject.findByPk(subjectData.subject_id);

    if (!existingSubject) {
      throw new Error("Không tìm thấy môn học để cập nhật.");
    }
    await existingSubject.update(subjectData);
    console.log(
      "🚀 ~ file: subjectRepository.js:92 ~ updatedSubject ~ existingSubject:",
      existingSubject
    );

    return existingSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllSubjects = async () => {
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
    console.log("🚀 ========= allSubject:", allSubject);
    return allSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
export default {
  createNewSubject,
  getAllSubject,
  getSubjectbyId,
  changeActiveSubject,
  softDeleteSubject,
  updatedSubject,
  getAllSubjects,
};
