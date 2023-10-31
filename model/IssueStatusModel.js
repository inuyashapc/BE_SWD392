import { DataTypes, Model } from "sequelize";
import sequelize from "../config/configDatabase.js";
import IssueSetting from "./IssueSettingModel.js";

class IssueStatus extends Model {}

IssueStatus.init(
  {
    status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status_name: {
      type: DataTypes.STRING(100),
    },
    status_description: {
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
    modelName: "issue_status",
    tableName: "issue_status",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default IssueStatus;
