import DefaultImage from "../constant/DefaultImage.js";
import { User } from "../model/IndexModel.js";
import bcrypt from "bcrypt"; 
import jwt from 'jsonwebtoken';

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
    const allUsers = await User.findAll({
      where: {
        role_id: 3,
      },
    });
    return allUsers;
  } catch (error) {
    throw new Error("Không có teacher" + error.message);
  }
};
const getAllManager = async () => {
  try {
    const allUsers = await User.findAll({
      where: {
        role_id: 2,
      },
    });
    return allUsers;
  } catch (error) {
    throw new Error("Không có teacher" + error.message);
  }
};
const login = async({ email, password }) => {
  const userExisting = await User.findOne({ where: { email: email } });
  if (userExisting) {
    const isMatch = await bcrypt.compare(password, userExisting.dataValues.password);
    if (isMatch == true) {
      // Tạo Access Token bằng JWT
      const accessToken = jwt.sign(
        {
          data: userExisting,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      return {
        ...userExisting.dataValues,
        password: "Not show",
        token: accessToken,
      };
    } else {
      throw new Error("Wrong email and password");
    }
  } else {
    throw new Error("User not exist.");
  }
}
const register = async({ full_name, phone_number, email, password })=> {
  const userExisting = await User.findOne({ where: { email: email } }); 
  if (userExisting != null) {
    throw new Error("User existing.");
  }

  // Mã hóa mật khẩu
  const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY));
  const avatar = DefaultImage.defaultAvatar;
  const role_id = process.env.ROLE_USER;
  const newUser = await User.create({
    full_name,
    phone_number,
    email,
    password: hashPassword,
    avatar: avatar,
    role_id: 4,
  }).then((ok)=>console.log(ok)).catch((err)=>console.log(err));

  // Clone a new user
  return {
    ...newUser,
    password: "Not show",
  };
}
export default {
  getAllUser,
  getAllTeacher,
  getAllManager,
  register,
  login
};
