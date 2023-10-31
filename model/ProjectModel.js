import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import User from "./UserModel.js";

class Project extends Model {}

Project.init(
  {
    project_id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    class_id: {
      type: DataTypes.STRING(20),
    },
    team_leader_id: {
      type: DataTypes.STRING(8),
      references: {
        model: User,
        key: "user_id",
      },
    },
    project_name: {
      type: DataTypes.STRING(50),
    },
    project_description: {
      type: DataTypes.STRING(200),
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
    modelName: "project",
    tableName: "project",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Project;
