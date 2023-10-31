import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import Project from "./ProjectModel.js";
import Class from "./ClassModel.js";
import Subject from "./SubjectModel.js";

class IssueSetting extends Model {}

IssueSetting.init(
  {
    setting_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.STRING(20),
      references: {
        model: Project,
        key: "project_id",
      },
    },
    class_id: {
      type: DataTypes.STRING(20),
      references: {
        model: Class,
        key: "class_id",
      },
    },
    subject_id: {
      type: DataTypes.STRING(20),
      references: {
        model: Subject,
        key: "subject_id",
      },
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
    modelName: "issue_setting",
    tableName: "issue_setting",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default IssueSetting;
