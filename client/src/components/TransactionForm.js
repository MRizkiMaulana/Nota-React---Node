import React, { useState } from "react";

function TransactionForm() {
  const [formData, setFormData] = useState({
    nama_client: "",
    alamat_client: "",
    nohp_client: "",
    email_client: "",
    biaya_dp: "",
    total_harga: "",
    services: "",
    penanggung_jawab: "",
    namabank_admin: "",
    norek_admin: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Gagal melakukan permintaan POST");
      }

      const result = await response.json();
      setResult(result);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat melakukan permintaan");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Client:
          <input
            type="text"
            name="nama_client"
            value={formData.nama_client}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Alamat Client:
          <input
            type="text"
            name="alamat_client"
            value={formData.alamat_client}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Client:
          <input
            type="email"
            name="email_client"
            value={formData.email_client}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nomer Hp Client:
          <input
            type="number"
            name="nohp_client"
            value={formData.nohp_client}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service:
          <input
            type="text"
            name="services"
            value={formData.services}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Penanggung Jawab:
          <input
            type="text"
            name="penanggung_jawab"
            value={formData.penanggung_jawab}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Biaya DP (Rp):
          <input
            type="number"
            name="biaya_dp"
            value={formData.biaya_dp}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Total Harga (Rp):
          <input
            type="number"
            name="total_harga"
            value={formData.total_harga}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nama Bank Admin:
          <input
            type="text"
            name="namabank_admin"
            value={formData.namabank_admin}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nomer Rekening Admin:
          <input
            type="number"
            name="norek_admin"
            value={formData.norek_admin}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Cetak Nota</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div id="nota-result">
          <h2>Nota Transaksi</h2>
          <p>ID Transaksi: {result.id_transaksi}</p>
          <p>Nama: {result.nama_client}</p>
          <p>Alamat: {result.alamat_client}</p>
          <p>Nomer Hp: {result.nohp_client}</p>
          <p>Email: {result.email_client}</p>
          <p>Layanan: {result.services}</p>
          <p>Penanggung Jawab: {result.penanggung_jawab}</p>
          <p>Biaya DP: Rp{result.biaya_dp}</p>
          <p>Total Harga: Rp{result.total_harga}</p>
          <p>Bank: Rp{result.namabank_admin}</p>
          <p>No Rek: Rp{result.norek_admin}</p>
        </div>
      )}
    </div>
  );
}

export default TransactionForm;
