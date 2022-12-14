const PORT = 8000;
const express = require("express");
const axios = require("axios").default;
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());

app.get("/flights", (req, res) => {
  // api from rapidAPI
  const options = {
    method: "GET",
    url: "https://toronto-pearson-airport.p.rapidapi.com/arrivals/terminal/3",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () =>
  console.log(`running on PORT: http://localhost:${PORT}/flights`)
);
