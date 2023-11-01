import { User } from "../model/indexModel.js";

const createNewUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
const getAllUser = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

const getAllTeacher = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};
export default {
  createNewUser,
  getAllUser,
  getAllTeacher,
};
