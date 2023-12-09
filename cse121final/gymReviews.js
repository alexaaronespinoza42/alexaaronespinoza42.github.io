// Llamada a fetch para obtener las revisiones
const getReviews = async () => {
    try {
      const response = await fetch("https://alexaaronespinoza42.github.io/cse121final/resources/reviews.json");
      const data = await response.json();
      
      // Llamar a la función para mostrar las revisiones
      displayReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  
  // Función para mostrar las revisiones en el HTML
  const displayReviews = (reviews) => {
    const reviewsContainer = document.querySelector('.reviews-container');
  
    // Limpiar contenido existente
    reviewsContainer.innerHTML = "";
  
    // Iterar sobre las revisiones y agregarlas al HTML
    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <h3>${review.customerName}</h3>
        <p>Years in Gym: ${review.yearsInGym}</p>
        <p>Review: ${review.gymReview}</p>
      `;
      reviewsContainer.appendChild(reviewElement);
    });
  };
  
  // Llamar a la función para obtener y mostrar revisiones al cargar la página
  getReviews();