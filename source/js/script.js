//Выбираем элементы из DOM
adForm = document.querySelector('.form');
const inputName = document.getElementById('name');
const inputTel = document.getElementById('phone-number');
const inputAge = document.getElementById('age');

//Задаём паттерны и сообщения для валидации
const phonePattern = /(\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})|(\+7\s?[\(]{0,1}4[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})/;
const phoneMessage = `Номер должен содержать 11 цифр и начинаться с +7(4__) или +7(9__)`;

const namePattern = /^[А-Яа-яЁё\s]+$/;
const nameMessage = `Поле принимает только буквы русского алфавита`;

const agePattern = /^(?:70|1[8-9]|[2-6][0-9])$/;
const ageMessage = `Возраст от 18-ти до 70-ти включительно`;


//Функция производит валидацию полей формы по шаблону, выводит сообщение и задаёт элементу класс для графического оформления ошибок
const inputValidation = (inputVar, pattern, message) => {
  inputVar.addEventListener('input', () => {
    var inputVarValue = inputVar.value;
    var valid = pattern.test(inputVarValue);
    console.log(valid);
    if (valid === false) {
      inputVar.setCustomValidity(message);
      inputVar.classList.add('form__text-input--error');
    } else {
      inputVar.setCustomValidity('');
      if (inputVar.classList.contains('form__text-input--error')) {
        inputVar.classList.remove('form__text-input--error');
      }
    }
    inputVar.reportValidity();
  });
}

//Вызываем функцию для нужных полей формы
inputValidation(inputTel, phonePattern, phoneMessage);
inputValidation(inputName, namePattern, nameMessage);
inputValidation(inputAge, agePattern, ageMessage);


//Предотвращаем действие по умолчанию при отправке формы и выводим алерт с данными.
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert(`Вы направили серверу следующие данные:
  имя: ${inputName.value};
  телефон: ${inputTel.value};
  возраст: ${inputAge.value} лет.`);
  adForm.reset();
});

