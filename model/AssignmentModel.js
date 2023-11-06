import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import Subject from "./SubjectModel.js";

class Assignment extends Model {}

Assignment.init(
  {
    assignment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Subject,
        key: "subject_id",
      },
    },
    assignment_name: {
      type: DataTypes.STRING(50),
    },
    assignment_description: {
      type: DataTypes.STRING(200),
    },
    due_date: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "assignment",
    tableName: "assignment",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Assignment;
