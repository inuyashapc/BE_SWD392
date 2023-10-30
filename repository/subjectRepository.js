import { Subject } from "../model/indexModel.js";

const createNewSubject = async (newSubjectData) => {
  try {
    const newSubject = await Subject.create(newSubjectData);
    return newSubject;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

export default { createNewSubject };
