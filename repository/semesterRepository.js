import { Semester } from "../model/indexModel.js";

const getAllSemester = async () => {
  try {
    const result = await Semester.findAll();
    return result;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

export default {
  getAllSemester,
};
