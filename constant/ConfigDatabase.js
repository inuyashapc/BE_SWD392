import { Sequelize } from "sequelize";

const sequelize = new Sequelize('SWD_FALL_2023', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
