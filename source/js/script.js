//Выбираем элементы из DOM
adForm = document.querySelector('.form');
const inputName = document.getElementById('name');
const inputTel = document.getElementById('phone-number');
const inputAge = document.getElementById('age');

//Предотвращаем действие по умолчанию при отправке формы и выводим алерт с данными.
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert(`Вы направили серверу следующие данные:
  имя: ${inputName.value};
  телефон: ${inputTel.value};
  возраст: ${inputAge.value}.`);
});

