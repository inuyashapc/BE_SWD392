import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import Project from "./ProjectModel.js";
import Class from "./ClassModel.js";

class Milestone extends Model {}

Milestone.init(
  {
    milestone_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Project,
        key: "project_id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Class,
        key: "class_id",
      },
    },
    milestone_name: {
      type: DataTypes.STRING(50),
    },
    milestone_type: {
      type: DataTypes.STRING(10),
    },
    milestone_status: {
      type: DataTypes.STRING(10),
    },
    milestone_description: {
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
  },
  {
    sequelize,
    modelName: "milestone",
    tableName: "milestone",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
Milestone.belongsTo(Project, { foreignKey: "project_id", as: "Project" });
Milestone.belongsTo(Class, { foreignKey: "class_id", as: "Class" });
export default Milestone;
