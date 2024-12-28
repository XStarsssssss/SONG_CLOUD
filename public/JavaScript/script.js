let currentIndex = 0;
const imageContainer = document.getElementById('imageContainer');
const imageWidth = 110; 

function scrollCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= imageContainer.children.length) {
    currentIndex = imageContainer.children.length - 1;
  }
  imageContainer.scrollTo({
    left: currentIndex * imageWidth,
    behavior: 'smooth'
  });
}


function changeHref(artistName) {
    const links = document.querySelectorAll('.artist-link');
    links.forEach(link => {
        if (link.innerText.trim() === artistName) {
            link.href = `/artist-details/${artistName}`;
        }
    });
}
function changeHref(songName) {
  const links = document.querySelectorAll('.songname-link');
  links.forEach(link => {
      if (link.innerText.trim() === songName) {
          link.href = `/song-details/${songName}`;
      }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const songContainers = document.querySelectorAll(".highlight, .image-container"); 

  searchInput.addEventListener("input", () => {
      const searchQuery = searchInput.value.toLowerCase();

      songContainers.forEach(container => {
          const textContent = container.textContent.toLowerCase();
          if (textContent.includes(searchQuery)) {
              container.style.display = ""; 
          } else {
              container.style.display = "none"; 
          }
      });
  });
});
function toggleFavorite(button) {
  const songId = button.getAttribute('data-song-id');

  fetch('/favorite', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ songId }),
  })
      .then(response => response.json())
      .then(data => {
          if (data.message) {
              console.log(data.message);
              button.style.color = 'red'; // Change button appearance
          }
      })
      .catch(error => console.error('Error:', error));
}