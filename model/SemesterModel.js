// models/semesters.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../constant/ConfigDatabase.js';

class Semesters extends Model {}

Semesters.init(
  {
    semester_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    semester_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'semester',
    tableName:'semester',
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at", 
  }
);

export default Semesters;
