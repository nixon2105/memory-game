const url = './db/db.json';
const container = document.querySelector('.cards');

const createTemplate = (data) => {
  return `<div class="card">
            <div class="card__font">
              <img src="../assets/images/cards/bg-cards.png" alt="logo" />
            </div>
            <div class="card__back">
              <img src="${data.image}" alt="logo" />
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
  data.map((el) => {
    container.innerHTML += createTemplate(el);
  });
};

getData();
