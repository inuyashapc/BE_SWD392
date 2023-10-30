import { userRepository } from "../repository/indexRepository.js";

const userRegister = async (req, res) => {
  try {
    const { user_id, full_name, password, email, phone_number, avatar } =
      req.body;
    const newUserRoleData = {
      user_id,
      full_name,
      password,
      email,
      phone_number,
      avatar,
      role_id:1
    };
    const newData = await userRepository.createNewUser(newUserRoleData);
    res.json(newData);
  } catch (error) {
    res.json("not found");
  }
};

const getAllUser = async (req,res) =>{
  try {
    const getAllUser = await userRepository.getAllUser();
    res.json(getAllUser);
  } catch (error) {
    res.json("not found");
  }
}
export default { userRegister ,getAllUser };
