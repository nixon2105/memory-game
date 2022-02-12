const getData = async () => {
  const response = await fetch('./db/db.json');
  const data = await response.json();
  console.log(data);
};

getData();
