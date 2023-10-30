import { Semesters, UserRoles } from "../model/indexModel.js";

const createNewSemester = async (semesterData) => {
  try {
    const newSemester = await Semesters.create(semesterData);
    return newSemester;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const createNewUserRole = async (userRoleData) => {
  try {
    const newUserRole = await UserRoles.create(userRoleData);
    return newUserRole;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
export default { createNewSemester, createNewUserRole };
