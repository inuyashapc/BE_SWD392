import { Semester, UserRole } from "../model/IndexModel.js";

const createNewSemester = async (semesterData) => {
  try {
    const newSemester = await Semester.create(semesterData);
    return newSemester;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

const getAllSemester = async () => {
  try {
    const result = await Semester.findAll();
    return result;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

const createNewUserRole = async (userRoleData) => {
  try {
    const newUserRole = await UserRole.create(userRoleData);
    return newUserRole;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
export default { createNewSemester, createNewUserRole,getAllSemester };
