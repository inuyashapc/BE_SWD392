import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import User from "./UserModel.js";
import Project from "./ProjectModel.js";

class ProjectMember extends Model {}

ProjectMember.init(
  {
    project_id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      references: {
        model: Project,
        key: "project_id",
      },
    },
    student_id: {
      type: DataTypes.STRING(8),
      primaryKey: true,
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
  },
  {
    sequelize,
    modelName: "project_member",
    tableName: "project_member",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default ProjectMember;
