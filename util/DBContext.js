import mongoose from "mongoose";
import Exception from "../constant/Exception.js";

const ConnectDB = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECT TO DATABASE SUCCESSFUL");
    return connection;
  } catch (error) {
    const { code } = error;
    if (error.code == 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
    } else if (code == "ENOTFOUND") {
      throw new Exception(Exception.WRONG_CONNECTION_STRING);
    }
    throw new Exception(Exception.CANNOT_CONNECT_MONGODB);
  }
};

export default ConnectDB;
