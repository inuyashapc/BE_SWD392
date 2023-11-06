import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import Project from "./ProjectModel.js";
import User from "./UserModel.js";
import IssueSetting from "./IssueSettingModel.js";

class Issue extends Model {}

Issue.init(
  {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Project,
        key: "project_id",
      },
    },
    issue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    assigner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    assignee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    issue_title: {
      type: DataTypes.STRING(50),
    },
    issue_description: {
      type: DataTypes.STRING(200),
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    setting_id: {
      type: DataTypes.INTEGER,
      references: {
        model: IssueSetting,
        key: "setting_id",
      },
    },
  },
  {
    sequelize,
    modelName: "issue",
    tableName: "issue",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Issue;
