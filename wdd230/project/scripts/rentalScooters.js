const url = 'https://weylin76.github.io/wdd230/final/data/rental.json'; 

async function populateTable() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const rentals = await response.json();

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
      reservationHalfDayCell.textContent = `$${rental.Reservation['Half Day']}`;
      row.appendChild(reservationHalfDayCell);

      const reservationFullDayCell = document.createElement('td');
      reservationFullDayCell.textContent = `$${rental.Reservation['Full Day']}`;
      row.appendChild(reservationFullDayCell);

      const walkInHalfDayCell = document.createElement('td');
      walkInHalfDayCell.textContent = `$${rental['Walk-In']['Half Day']}`;
      row.appendChild(walkInHalfDayCell);

      const walkInFullDayCell = document.createElement('td');
      walkInFullDayCell.textContent = `$${rental['Walk-In']['Full Day']}`;
      row.appendChild(walkInFullDayCell);

      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error('An error occurred while fetching table data:', error);
  }
}

window.addEventListener('load', populateTable);
