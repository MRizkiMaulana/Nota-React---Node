import React, { useState } from "react";
import TransactionDetails from "./TransactionDetails";

function TransactionSearchForm() {
  const [idTransaksi, setIdTransaksi] = useState("");
  const [transaction, setTransaction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idTransaksi.trim()) {
      setError("ID Transaksi tidak boleh kosong");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/transactions/${idTransaksi}`
      );
      if (!response.ok) {
        throw new Error("Transaksi tidak ditemukan");
      }
      const result = await response.json();
      setTransaction(result);
      setError(null);
    } catch (error) {
      console.error("Error:", error.message);
      setTransaction(null);
      setError("Transaksi tidak ditemukan");
    }
  };

  const handleChange = (e) => {
    setIdTransaksi(e.target.value);
  };

  return (
    <div>
      <h2>Pencarian Transaksi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID Transaksi:
          <input
            type="text"
            value={idTransaksi}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Cari</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {transaction && <TransactionDetails transaction={transaction} />}
    </div>
  );
}

export default TransactionSearchForm;
