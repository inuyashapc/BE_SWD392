// models/user.js
import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import UserRoles from "./UserRolesModel.js";

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(10),
    },
    avatar: {
      type: DataTypes.STRING(255),
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: UserRoles,
        key: "role_id",
      },
    },
  },
  {
    sequelize,
    modelName: "user",
    tableName:'user',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default User;
