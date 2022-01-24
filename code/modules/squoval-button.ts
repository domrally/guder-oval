import {observeResizing} from './custom-elements/observe-resizing.js';

export class SquovalButton extends HTMLElement implements HTMLButtonElement {
  constructor() {
    super();

    observeResizing(this);
  }

  get button() {
    return this.firstElementChild as HTMLButtonElement;
  }

  get disabled() {
    return this.button.disabled;
  }

  get form() {
    return this.button.form;
  }

  get formAction() {
    return this.button.formAction;
  }

  get formEnctype() {
    return this.button.formEnctype;
  }

  get formMethod() {
    return this.button.formMethod;
  }

  get formNoValidate() {
    return this.button.formNoValidate;
  }

  get formTarget() {
    return this.button.formTarget;
  }

  get name() {
    return this.button.name;
  }

  get type() {
    return this.button.type;
  }

  get validationMessage() {
    return this.button.validationMessage;
  }

  get validity() {
    return this.button.validity;
  }

  get willValidate() {
    return this.button.willValidate;
  }

  get labels() {
    return this.button.labels;
  }

  get value() {
    return this.button.value;
  }

  checkValidity() {
    return this.button.checkValidity();
  }

  reportValidity() {
    return this.button.reportValidity();
  }

  setCustomValidity(error: string) {
    return this.button.setCustomValidity(error);
  }
}

customElements.define('squoval-button', SquovalButton);
