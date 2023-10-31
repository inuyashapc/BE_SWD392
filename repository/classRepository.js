import { Class } from "../model/indexModel.js";

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

export default {
  createNewClass,
};
