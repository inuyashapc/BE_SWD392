// models/semesters.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/configDatabase.js';

class Semesters extends Model {}

Semesters.init(
  {
    SemesterID: {
      type: DataTypes.STRING(8),
      primaryKey: true,
    },
    SemesterName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATE,
    },
    EndDate: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'Semesters',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default Semesters;
