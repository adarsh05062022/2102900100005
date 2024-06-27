const axios = require("axios");

const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5NDc4NjQ3LCJpYXQiOjE3MTk0NzgzNDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU1N2RmMmQ5LWEzMmYtNDljMi1iYTk5LTIzNTk2MzA3NWM1MiIsInN1YiI6ImFkYXJzaDIwMjFjczExNkBhYmVzaXQuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI1NTdkZjJkOS1hMzJmLTQ5YzItYmE5OS0yMzU5NjMwNzVjNTIiLCJjbGllbnRTZWNyZXQiOiJyT3Z3dGNxblFFUk5SeVFmIiwib3duZXJOYW1lIjoiQWRhcnNoIER1YmV5Iiwib3duZXJFbWFpbCI6ImFkYXJzaDIwMjFjczExNkBhYmVzaXQuZWR1LmluIiwicm9sbE5vIjoiMjEwMjkwMDEwMDAwNSJ9.n7rjUhdT2FkZe0M9onZOXpKgZxZVWzMHWkhKW_Ug_aM";
const severApi = "http://20.244.56/144/test";

// function to fetch the data from the api

async function fetchProductData(company, category, minPrice, maxPrice, top) {
    try {
      const response = await axios.get(
        `${severApi}/companies/${company}/categories/${category}/products`,
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