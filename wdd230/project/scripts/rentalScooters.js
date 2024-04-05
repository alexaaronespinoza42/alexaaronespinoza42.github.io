const url = 'https://api.github.com/repos/alexaaronespinoza42/alexaaronespinoza42.github.io/contents/wdd230/project/data/scooters.json';

async function populateTable() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const content = atob(data.content); // Decodifica el contenido del archivo

    const rentals = JSON.parse(content); // Parsea el JSON

    const tableBody = document.querySelector('#rentalTable tbody');
    tableBody.innerHTML = '';
    
    rentals.forEach(rental => {
      const row = document.createElement('tr');

      const rentalTypeCell = document.createElement('td');
      rentalTypeCell.textContent = rental['Rental Type'];
      row.appendChild(rentalTypeCell);

      const maxPersonsCell = document.createElement('td');
      maxPersonsCell.textContent = rental['Max. Persons'];
      row.appendChild(maxPersonsCell);

      const reservationHalfDayCell = document.createElement('td');
      reservationHalfDayCell.textContent = rental.Reservation['Half Day'];
      row.appendChild(reservationHalfDayCell);

      const reservationFullDayCell = document.createElement('td');
      reservationFullDayCell.textContent = rental.Reservation['Full Day'];
      row.appendChild(reservationFullDayCell);

      const walkInHalfDayCell = document.createElement('td');
      walkInHalfDayCell.textContent = rental['Walk-In']['Half Day'];
      row.appendChild(walkInHalfDayCell);

      const walkInFullDayCell = document.createElement('td');
      walkInFullDayCell.textContent = rental['Walk-In']['Full Day'];
      row.appendChild(walkInFullDayCell);

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error('An error occurred while fetching table data:', error);
  }
}

window.addEventListener('load', populateTable);
