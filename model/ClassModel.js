// models/class.js
import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import User from "./UserModel.js";
import Subject from "./SubjectModel.js";
import { Semester } from "./IndexModel.js";
class Class extends Model {}

Class.init(
  {
    class_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    class_name: {
      type: DataTypes.STRING(45),
    },
    class_status: {
      type: DataTypes.BOOLEAN,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Subject,
        key: "subject_id",
      },
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    semester_id: {
      type: DataTypes.STRING(8),
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
    modelName: "class",
    tableName: "class",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
Class.belongsTo(Subject, { foreignKey: "subject_id", as: "Subject" });
Class.belongsTo(User, { foreignKey: "teacher_id", as: "Teacher" });
Class.belongsTo(Semester, { foreignKey: "semester_id", as: "Semester" });
export default Class;
