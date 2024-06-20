// routes/transactions.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Handler untuk GET /api/transactions
router.get("/", (req, res) => {
  db.query("SELECT * FROM transactions", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Handler untuk GET /api/transactions/:id_transaksi
router.get("/:id_transaksi", (req, res) => {
  const id_transaksi = req.params.id_transaksi;
  const query = "SELECT * FROM transactions WHERE id_transaksi = ?";

  db.query(query, [id_transaksi], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan" });
    }
    res.json(results[0]);
  });
});

// Handler untuk POST /api/transactions
router.post("/", (req, res) => {
  const {
    nama_client,
    alamat_client,
    nohp_client,
    email_client,
    biaya_dp,
    total_harga,
    services,
    penanggung_jawab,
    namabank_admin,
    norek_admin,
  } = req.body;
  const id_transaksi = generateRandomId();
  const query =
    "INSERT INTO transactions (id_transaksi, nama_client, alamat_client, nohp_client, email_client, biaya_dp, total_harga, services, penanggung_jawab, namabank_admin, norek_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      id_transaksi,
      nama_client,
      alamat_client,
      nohp_client,
      email_client,
      biaya_dp,
      total_harga,
      services,
      penanggung_jawab,
      namabank_admin,
      norek_admin,
    ],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_transaksi,
        nama_client,
        alamat_client,
        nohp_client,
        email_client,
        biaya_dp,
        total_harga,
        services,
        penanggung_jawab,
        namabank_admin,
        norek_admin,
      });
    }
  );
});

// Handler untuk DELETE /api/transactions/:id_transaksi
router.delete("/:id_transaksi", (req, res) => {
  const id_transaksi = req.params.id_transaksi;
  const query = "DELETE FROM transactions WHERE id_transaksi = ?";

  db.query(query, [id_transaksi], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Transaksi berhasil dihapus" });
  });
});

// Handler untuk PUT /api/transactions/:id_transaksi
router.put("/:id_transaksi", (req, res) => {
  const id_transaksi = req.params.id_transaksi;
  const {
    nama_client,
    alamat_client,
    nohp_client,
    email_client,
    biaya_dp,
    total_harga,
    services,
    penanggung_jawab,
    namabank_admin,
    norek_admin,
  } = req.body;
  const query =
    "UPDATE transactions SET nama_client=?, alamat_client=?, nohp_client=?, email_client=?, biaya_dp=?, total_harga=?, services=?, penanggung_jawab=?, namabank_admin=?, norek_admin=? WHERE id_transaksi=?";

  db.query(
    query,
    [
      nama_client,
      alamat_client,
      nohp_client,
      email_client,
      biaya_dp,
      total_harga,
      services,
      penanggung_jawab,
      namabank_admin,
      norek_admin,
      id_transaksi,
    ],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_transaksi,
        nama_client,
        alamat_client,
        nohp_client,
        email_client,
        biaya_dp,
        total_harga,
        services,
        penanggung_jawab,
        namabank_admin,
        norek_admin,
      });
    }
  );
});

function generateRandomId() {
  return require("crypto").randomBytes(7).toString("hex");
}

module.exports = router;
