const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 4000;

app.use(express.json());

app.get("/categories/:categoryname/products", async (req, res) => {
  const { categoryname } = req.params;
  const {
    n,
    page = 1,
    sort_by,
    order = "asc",
    minPrice,
    maxPrice,
    company,
  } = req.query;

  if (!n || isNaN(n) || n <= 0) {
    return res.status(400).json({ error: 'Invalid "n" parameter' });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on the port 4000");
});
