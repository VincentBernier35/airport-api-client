const tableBody = document.getElementById("table-body");

const getFlight = () => {
  const url = "http://localhost:8000/flights"
  fetch(url)
    .then(response => response.json())
    .then(flights => {
      console.log("voici les vols :", flights)
    })
    .catch(err => console.log(err))
}

getFlight();

const populateTable = (flights) => {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");
    const tableIcon = document.createElement("td");
  }
}