// models/permittedEmailDomains.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/configDatabase.js';

class PermittedEmailDomains extends Model {}

PermittedEmailDomains.init(
  {
    DomainID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    DomainName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PermittedEmailDomains',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default PermittedEmailDomains;
