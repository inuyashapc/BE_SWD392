import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import User from "./UserModel.js";

class Subject extends Model {}

Subject.init(
  {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    subject_code: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    subject_name: {
      type: DataTypes.STRING(200),
    },
    subject_description: {
      type: DataTypes.STRING(500),
    },
    manager_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    isActived: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1, 
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "subject",
    tableName: "subject",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
Subject.belongsTo(User, { foreignKey: 'manager_id', as: 'Manager' });

export default Subject;
