import { Sequelize } from "sequelize";

const sequelize = new Sequelize('SWD_FALL_2023', 'root', 'nguyenduyanh1602', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
