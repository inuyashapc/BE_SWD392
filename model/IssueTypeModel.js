import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import IssueSetting from "./IssueSettingModel.js";

class IssueType extends Model {}

IssueType.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING(100),
    },
    type_description: {
      type: DataTypes.STRING(500),
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
    modelName: "issue_type",
    tableName: "issue_type",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default IssueType;
