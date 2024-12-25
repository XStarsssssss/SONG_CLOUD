import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Masha2007',
  database: 'SONG_CLOUD_V4',
  waitForConnections: true,
  connectionLimit: 10,
});
