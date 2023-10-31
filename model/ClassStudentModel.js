import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import User from "./UserModel.js";

class ClassStudent extends Model {}

ClassStudent.init(
  {
    class_id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    class_status: {
      type: DataTypes.BOOLEAN,
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
    modelName: "class_student",
    tableName: "class_student",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default ClassStudent;
