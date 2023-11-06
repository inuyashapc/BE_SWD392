// models/userRoles.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../constant/ConfigDatabase.js';

class UserRoles extends Model {}

UserRoles.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  
    },
    role_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    role_description: {
      type: DataTypes.STRING(200), 
      allowNull: false, 
    },
  },
  {
    sequelize,
    modelName: 'user_role',
    tableName: 'user_role',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default UserRoles;
