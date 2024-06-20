import React from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionSearchForm from "./components/TransactionSearchForm";


function App() {
  return (
    <div className="App">
      <h1>Cetak Nota dan Cari Transaksi</h1>
      <div className="forms-container">
        <div className="form-wrapper">
          <h2>Cetak Nota</h2>
          <TransactionForm />
        </div>
        <div className="form-wrapper">
          <TransactionSearchForm />
        </div>
      </div>
    </div>
  );
}

export default App;
