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
            link.href = `/Artist_Details/${artistName}`;
        }
    });
}