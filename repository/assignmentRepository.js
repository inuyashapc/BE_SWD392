import { Assignment } from "../model/IndexModel.js";

const createNewAssignment = async (newAssignmentData) => {
  try {
    const newAssignment = await Assignment.create(newAssignmentData);
    return newAssignment;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

export default { createNewAssignment };
