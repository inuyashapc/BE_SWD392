import mysql from 'mysql'


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'swd_fall_2023'
});

const ConnectDB = () =>{
  db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });
} 


export default ConnectDB;