const initFormValidate = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const MIN_NAME_LENGTH = 3;
    const MAX_NAME_LENGTH = 16;

    const REG_NAME = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    const forms = document.querySelectorAll('.form form');
    let isValidateText = false;
    let isValidateSelect = false;
    let isValidateDate = false;

    forms.forEach((form) => {
      const validate = (elem) => {
        switch (elem.name) {

          case 'name':
            if (elem.value.length < MIN_NAME_LENGTH && elem.value.length !== 0) {
              elem.nextElementSibling.textContent = '* От 3 символов';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateText = false;
            } else if (elem.value.length > MAX_NAME_LENGTH) {
              elem.nextElementSibling.textContent = '* До 16 символов (включительно)';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateText = false;
            } else if (!REG_NAME.test(elem.value) && elem.value !== '') {
              elem.nextElementSibling.textContent = '* Не правильный формат ввода';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateText = false;
            } else if (REG_NAME.test(elem.value) && elem.value !== '') {
              elem.nextElementSibling.textContent = '';
              elem.classList.add('valid');
              elem.classList.remove('invalid');
              isValidateText = true;
            } else {
              elem.nextElementSibling.textContent = '';
              elem.classList.remove('valid');
              elem.classList.remove('invalid');
            }
            break;
          case 'tel':
            if (elem.value.length !== 18 && elem.value !== '') {
              elem.nextElementSibling.textContent = '* Не правильный формат ввода';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateText = false;
            } else if (elem.value.length === 18 && elem.value !== '') {
              elem.nextElementSibling.textContent = '';
              elem.classList.add('valid');
              elem.classList.remove('invalid');
              isValidateText = true;
            } else {
              elem.nextElementSibling.textContent = '';
              elem.classList.remove('valid');
              elem.classList.remove('invalid');
            }
            break;
          case 'date':
            const presentTime = new Date();

            if (elem.value.length !== 10) {
              elem.nextElementSibling.textContent = '* Дата не выбрана';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateDate = false;
            } else if (elem.valueAsNumber < presentTime) {
              elem.nextElementSibling.textContent = '* Выберите дату, начиная с завтрашнего дня';
              elem.classList.remove('valid');
              elem.classList.add('invalid');
              isValidateDate = false;
            } else if (elem.valueAsNumber > presentTime) {
              elem.nextElementSibling.textContent = '';
              elem.classList.add('valid');
              elem.classList.remove('invalid');
              isValidateDate = true;
            } else {
              elem.nextElementSibling.textContent = '';
              elem.classList.remove('valid');
              elem.classList.remove('invalid');
            }
            break;
          default:
            break;
        }
      };

      for (let elem of form.elements) {

        if (elem.type === 'text' || elem.type === 'tel') {
          elem.addEventListener('input', () => {
            validate(elem);
          });
        }
        if (elem.type === 'tel') {
          elem.addEventListener('blur', () => {
            setTimeout(() => validate(elem), 0);
          });
        }

        if (elem.name === 'date') {
          elem.type = 'text';
          elem.addEventListener('focus', () => {
            elem.type = 'date';
          });
          elem.addEventListener('blur', () => {
            elem.type = 'text';
            const str = elem.value;
            const year = str.substring(2, 4);
            const month = str.substring(5, 7);
            const day = str.substring(8, 10);
            if (str !== '') {
              elem.value = `${day}/${month}/${year}`;
            } else {
              elem.nextElementSibling.textContent = '';
              elem.classList.remove('valid');
              elem.classList.remove('invalid');
            }
          });
        }
      }

      form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        for (let elem of form.elements) {
          if (elem.type === 'text' && elem.name !== 'date' || elem.type === 'tel') {
            if (elem.value === '') {
              elem.nextElementSibling.textContent = 'Данные не введены';
              isValidateText = false;
            }
          }
          if (elem.tagName === 'SELECT') {
            const optionSelected = form.querySelector('.select__option.select-selected');
            const selecterror = form.querySelector('span.select__text-error');
            if (!optionSelected) {
              selecterror.textContent = 'Услуга не выбрана';
              isValidateSelect = false;
            } else {
              selecterror.textContent = '';
              isValidateSelect = true;
            }
          }
          if (elem.name === 'date') {
            if (elem.value === '') {
              elem.nextElementSibling.textContent = 'Дата не выбрана';
              isValidateDate = false;
            }
          }
        }

        if (evt.target.parentElement.classList.contains('form--modal')) {
          isValidateSelect = true;
        }
        if (evt.target.parentElement.classList.contains('form--modal')
          && evt.target.parentElement.classList.contains('form--call-back')) {
          isValidateSelect = true;
          isValidateDate = true;
        }
        if (isValidateText && isValidateSelect && isValidateDate) {
          form.submit();
          form.reset();
        }
      });
    });
  });
};

export {initFormValidate};
