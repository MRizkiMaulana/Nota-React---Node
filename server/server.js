const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const transactionRoutes = require("./routes/transactions");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/transactions", transactionRoutes); // Mounting rute untuk /api/transactions

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
