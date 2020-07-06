/* eslint-disable class-methods-use-this */
export default class FormValidate {
  constructor(form, button) {
    this.form = form;
    this.button = button;

    this.listener();
  }

  checkInputValidity(event) {
    this.event = event;

    const errMessage = { validLenght: 'Должно быть не менее 2-х символов', validInput: 'Необходимо ввести ключевое слово'};

    let message = "";

    if (this.event.target.validity.valueMissing) {
      message = errMessage.validInput;
    } else if (this.event.target.validity.tooShort) {
      message = errMessage.validLenght;
    }
    this.event.target.nextElementSibling.textContent = message;
  }

  setSubmitButtonState() {
    if (!this.form.checkValidity()) {
      this.button.disabled = true;
    } else {
      this.button.disabled = false;
    }
  }

  listener() {
    this.form.addEventListener('input', this.checkInputValidity.bind(this));
    this.form.addEventListener('input', this.setSubmitButtonState.bind(this));
  }
}
