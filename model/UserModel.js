// models/user.js
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";

class User extends Model {}

User.init(
  {
    UserID: {
      type: DataTypes.STRING(8),
      primaryKey: true,
    },
    Full_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    Phone_number: {
      type: DataTypes.STRING(10),
    },
    Avatar: {
      type: DataTypes.STRING(255),
    },
    RoleID: {
      type: DataTypes.INTEGER,
      references: {
        model: "UserRoles",
        key: "RoleID",
      },
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default User;
