const url = './db/db.json';
const container = document.querySelector('.cards');

const createTemplate = (data) => {
  return `<div class="card">
  
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
