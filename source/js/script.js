adForm = document.querySelector('.form');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  //const successMessageTemplate = document.querySelector('#success').content.querySelector('.success'); // содержимое шаблона #success
  //const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error'); // содержимое шаблона #error
  //const fields = document.querySelectorAll("input:not([type='button']), select");

    const name = document.getElementById('name');
    const tel = document.getElementById('tel');
    const age = document.getElementById('age');

  let text = [];
  /*fields.forEach(
    f => { text.push(f.type ==="checkbox" ? f.checked : f.value) }
    );*/
  alert(`Вы направили серверу следующие данные:
  имя: ${name};
  телефон: ${tel};
  возраст: ${age}.`);
});

