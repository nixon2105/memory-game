const url = './db/db.json';
const container = document.querySelector('.cards');

const createTemplate = (data) => {
  return `<div class="card">
            <div class="card__inner">
              <div class="card__font"></div>
              <div class="card__back" style='background-image: url("${data.image}");'></div>
            </div>
          </div>`;
};

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  showItem(data);
};

const showItem = (data) => {
  container.innerHTML = '';
  data
    .sort(() => Math.random() - 0.5)
    .map((el) => {
      container.innerHTML += createTemplate(el);
    });
};

getData();

container.addEventListener('click', (e) => {
  const target = e.target;
  const card = target.closest('.card');
  if (card) {
    card.classList.add('flip');
  }
});

// const flip = (e) => {
//   // const card = e.target.closest('.card');
//   if (e.target.className.includes('card__font')) {
//     // card.classList.add('is-flipped');
//     console.log('hello');
//     1;
//   }
// };
// cardsContainer.addEventListener('click', flip);
