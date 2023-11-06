import { DataTypes, Model } from "sequelize";
import { Class, Project, Subject } from "./IndexModel.js";
import sequelize from "../constant/ConfigDatabase.js";
class IssueSetting extends Model {}

IssueSetting.init(
  {
    setting_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Project,
        key: "project_id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Class,
        key: "class_id",
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Subject,
        key: "subject_id",
      },
    },
    work_process: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    gitlab_sync: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    is_actived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
IssueSetting.belongsTo(Project, { foreignKey: "project_id", as: "Project" });
IssueSetting.belongsTo(Class, { foreignKey: "class_id", as: "Class" });
IssueSetting.belongsTo(Subject, { foreignKey: "subject_id", as: "Subject" });
export default IssueSetting;
