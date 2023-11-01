import DefaultImage from "../resource/DefaultImage.js";
import { User } from "../model/indexModel.js";
import bcrypt from "bcrypt"; 
import jwt from 'jsonwebtoken';

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
const login = async({ email, password }) => {
  const userExisting = await User.findOne({ where: { email: email } });
  if (userExisting) {
    const isMatch = await bcrypt.compare(password, userExisting.password);
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
        ...userExisting.toObject(),
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
const register=async({ full_name, phone_number, email, password })=> {
  console.log(123123)
  const userExisting = await User.findOne({ where: { email: email } }); 
  console.log(userExisting)
  if (userExisting != null) {
    throw new Error("User existing.");
  }

  // Mã hóa mật khẩu
  const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY));
  const avatar = DefaultImage.defaultAvatar;
  const role_id = process.env.ROLE_USER;
  console.log({ //
    full_name,
    phone_number,
    email,
    password: hashPassword,
    avatar: avatar,
    role_id: role_id,
  })
  const newUser = await User.create({
    user_id:"he154131", //
    full_name,
    phone_number,
    email,
    password: "32131231",
    avatar: avatar,
    role_id: 1,
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
  register,
  login
};
