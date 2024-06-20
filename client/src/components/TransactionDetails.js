import React from "react";

function TransactionDetails({ transaction }) {
  return (
    <div>
      <h2>Detail Transaksi</h2>
      <p>ID Transaksi: {transaction.id_transaksi}</p>
      <p>Nama Client: {transaction.nama_client}</p>
      <p>Alamat Client: {transaction.alamat_client}</p>
      <p>No HP Client: {transaction.nohp_client}</p>
      <p>Email Client: {transaction.email_client}</p>
      <p>Biaya DP: Rp{transaction.biaya_dp}</p>
      <p>Total Harga: Rp{transaction.total_harga}</p>
      <p>Services: {transaction.services}</p>
      <p>Penanggung Jawab: {transaction.penanggung_jawab}</p>
      <p>Nama Bank Admin: {transaction.namabank_admin}</p>
      <p>No Rek Admin: {transaction.norek_admin}</p>
    </div>
  );
}

export default TransactionDetails;
