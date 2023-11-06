import { userRepository } from "../repository/IndexRepository.js";
import { body, validationResult } from "express-validator";
import sendEmail from "../util/Email.js";
import jwt from "jsonwebtoken";

const getAllUser = async (req, res) => {
  try {
    const getAllUser = await userRepository.getAllUser();
    res.json(getAllUser);
  } catch (error) {
    res.json("not found");
  }
};

const getAllTeacher = async (req, res) => {
  try {
    const getAllTeachers = await userRepository.getAllTeacher();
    res.json(getAllTeachers);
  } catch (error) {
    res.json("not found");
  }
};
const getAllManager = async (req, res) => {
  try {
    const getAllManager = await userRepository.getAllManager();
    res.json(getAllManager);
  } catch (error) {
    res.json("not found");
  }
};

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Destructuring object
  const { full_name, phone_number, email, password } = req.body;
  try {
    const sendEmailCheck = await sendEmail(email);

    const newUser = await userRepository.register({
      full_name,
      phone_number,
      email,
      password,
    });

    res.status(201).json({
      message: "Register successfully.",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      errors: error.toString(),
    });
  }
};
const login = async (req, res) => {
  // Validation done
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  // Call Repository: User
  try {
    const loginUser = await userRepository.login({ email, password });
    res.status(200).json({
      message: "Login successfully.",
      data: loginUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};

export default { register, getAllUser, getAllTeacher, login ,getAllManager};
