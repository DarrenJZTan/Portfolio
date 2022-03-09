const carouselRow = document.querySelector('#carousel-container');
const cardsList = Array.from(document.querySelector('#carousel-container').children);
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

console.log(cardsList);
console.log(carouselRow);

const rotateLeft = () => {
  cardsList.splice(0, 0, cardsList.splice(4, 1)[0])
  for(let i = 0; i < cardsList.length; ++i) {
    carouselRow.appendChild(cardsList[i]);
  }
};

const rotateRight = () => {
  cardsList.splice(4, 0, cardsList.splice(0, 1)[0])
  for(let i = 0; i < cardsList.length; ++i) {
    carouselRow.appendChild(cardsList[i]);
  }
}

next.addEventListener('click', rotateRight)
prev.addEventListener('click', rotateLeft)