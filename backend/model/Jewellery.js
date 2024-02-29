import { connection as db } from "../config/index.js";
import mysql from 'mysql2'
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,
  database: process.env.MYSQL_ADDON_DB,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  PORT: process.env.MYSQL_ADDON_PORT,
}).promise();
class Jewellery {
  fetchJewellery(req, res) {
    const qry = `
        SELECT jewelID, jewelName, jewelQuantity,
        jewelAmount, userID
        FROM Jewellery;
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchJewel(req, res) {
    const qry = `
        SELECT jewelID, jewelleryCategory, jewelName, jewelQuantity,
        jewelAmount, userID
        FROM Jewellery
        WHERE jewelID = ${req.params.id};
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0]
      });
    });
  }
  addJewel = async (name, description, category, price, image) => {
    const [result] = await pool.query('INSERT INTO Jewellery (name, description, category, price, image) VALUES (?, ?, ?, ?, ?)', [name, description, category, price, image]);
    return getJewel(result.insertId);
};

 updateJewel = async (id, name, description, category, price, image) => {
    await pool.query('UPDATE Jewellery SET name = ?, description = ?, category = ?, price = ?, image = ? WHERE id = ?', [name, description, category, price, image. id]);
    return getJewel(id);
};

 deleteJewel = async (id) => {
    await pool.query('DELETE FROM Jewellery WHERE id = ?', [id]);
    return getAllJewellery();
};
}

export { Jewellery };
