import { DataTypes, Model } from "sequelize";
import sequelize from "../constant/ConfigDatabase.js";
import { IssueSetting } from "./IndexModel.js";

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
IssueType.belongsTo(IssueSetting, {
  foreignKey: "setting_id",
  as: "IssueSetting",
});
export default IssueType;
