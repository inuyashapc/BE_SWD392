import { userRepository } from "../repository/indexRepository.js";

const userRegister = async (req, res) => {
  try {
    const { UserID, Full_name, Password, Email, Phone_number, Avatar } =
      req.body;
    const newUserRoleData = {
      UserID,
      Full_name,
      Password,
      Email,
      Phone_number,
      Avatar,
      RoleID:1
    };
    const newSemester = await userRepository.createNewUser(newUserRoleData);
    res.json(newSemester);
  } catch (error) {
    res.json("not found");
  }
};
export default { userRegister };
