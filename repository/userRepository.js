import { User } from "../model/indexModel.js";
import Exception from "../constant/Exception.js";
import SuccessConstants from "../constant/SuccessConstants.js";
import ConfigConstants from "../constant/ConfigConstants.js";

const createNewUser = async(userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("Không thể tạo: " + error.message);
  }
};

export default {
  createNewUser,
};
