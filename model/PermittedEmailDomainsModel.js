// models/permittedEmailDomains.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../constant/ConfigDatabase.js';

class PermittedEmailDomains extends Model {}

PermittedEmailDomains.init(
  {
    domain_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    domain_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'permitted_email_domain',
    tableName:'permitted_email_domain',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default PermittedEmailDomains;
