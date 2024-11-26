const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
    console.log("Data", response.data);
  } catch {
    console.log("Error fetching data:", error);
  }
}
fetchData();
