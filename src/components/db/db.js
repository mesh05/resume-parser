import mysql from "mysql2";

const access = {
  user: "root",
  database: "resumeparser",
  password: "22EC1U3Inisl#wiswAPe",
};

const conn = mysql.createPool(access).promise();

export default conn;
