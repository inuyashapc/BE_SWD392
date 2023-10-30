// models/userRoles.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/configDatabase.js';

class UserRoles extends Model {}

UserRoles.init(
  {
    RoleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  
    },
    RoleName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    RoleDescription: {
      type: DataTypes.STRING(200), 
      allowNull: false, 
    },
  },
  {
    sequelize,
    modelName: 'user_roles',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default UserRoles;
