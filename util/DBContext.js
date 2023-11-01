import mysql from "mysql";

const ConnectDB = async () => {
  const password = process.env.PASS_MYSQL;
  const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: password,
    database: "swd_fall_2023",
  });

  await db.connect((err) => {
    if (err) {
      console.error("Database connection error:", err);
    } else {
      console.log("Connected to MySQL database");
    }
  });
};

export default ConnectDB;
