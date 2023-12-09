const getReviews = async () => {
    try {
      const response = await fetch("https://alexaaronespinoza42.github.io/cse121b/resources/reviews.json");
      const data = await response.json();
      
      displayReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  
  const displayReviews = (reviews) => {
    const reviewsContainer = document.querySelector('.reviews__container');
  
    reviewsContainer.innerHTML = "";
  
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
  
  getReviews();