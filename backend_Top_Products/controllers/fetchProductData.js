const axios = require("axios");

const access_token = "";
const severApi = "http://20.244.56/144";

// function to fetch the data from the api

async function fetchProductData(company, category, minPrice, maxPrice, top) {
    try {
      const response = await axios.get(
        `${testServerEndpoint}/companies/${company}/categories/${category}/products`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
          params: { top, minPrice, maxPrice }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching product data:', error);
      throw error;
    }
  }
  

module.exports = {fetchProductData};