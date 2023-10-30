import { subRepository } from "../repository/indexRepository.js";

const createNewSemester = async (req, res) => {
  try {
    const { SemesterID, SemesterName, StartDate, EndDate } = req.body;
    const newSemesterData = {
      SemesterID,
      SemesterName,
      StartDate,
      EndDate,
    };
    const newSemester = await subRepository.createNewSemester(newSemesterData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};
const createNewUserRole = async (req, res) => {
  try {
    const { RoleName, RoleDescription } = req.body;
    const newUserRoleData = {
      RoleName,
      RoleDescription,
    };
    const newSemester = await subRepository.createNewUserRole(newUserRoleData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};
export default { createNewSemester, createNewUserRole};
