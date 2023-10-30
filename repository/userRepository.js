import { User } from "../model/indexModel.js";


const createNewUser = async(userData) => {
  try {
    console.log(
      userData.user_id + ',' +
      userData.full_name + ',' +
      userData.password + ',' +
      userData.email + ',' +
      userData.phone_number + ',' +
      userData.avatar + ',' +
      userData.role_id
    );
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllUser = async () =>{
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
}
export default {
  createNewUser,getAllUser
};
