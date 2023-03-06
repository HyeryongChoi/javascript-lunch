import { $ } from '../utils/domSelectors';
import { Errors, Restaurant } from '../types/types';
import restaurantFormValidator from '../validators/restaurantFormValidator';
import { ERROR_MESSAGE, MESSAGE } from '../constants/constants';

class ModalView {
  private restaurantAddForm = $<HTMLFormElement>('#restaurant-add-form')!;
  private modal = $<HTMLDialogElement>('.modal');
  private closeButton = $<HTMLButtonElement>('#modal-close-button');
  private categoryInput = $<HTMLSelectElement>('#category');
  private categoryInputCaption = $<HTMLSpanElement>('#category-caption');
  private nameInput = $<HTMLInputElement>('#name');
  private nameInputCaption = $<HTMLSpanElement>('#name-caption');
  private distanceInput = $<HTMLInputElement>('#distance');
  private distanceInputCaption = $<HTMLSpanElement>('#distance-caption');
  private linkInput = $<HTMLInputElement>('#link');
  private linkInputCaption = $<HTMLSpanElement>('#link-caption');

  constructor() {
    this.initInputCaptions();
    this.addCloseButtonClickEvent();
    this.addModalBackdropClickEvent();
  }

  initInputCaptions() {
    this.categoryInputCaption.textContent = ERROR_MESSAGE.EMPTY_CATEGORY;
    this.nameInputCaption.textContent = ERROR_MESSAGE.INVALID_NAME;
    this.distanceInputCaption.textContent = ERROR_MESSAGE.EMPTY_DISTANCE;
  }

  addSubmitEventHandler(onSubmitRestaurantAddForm: CallableFunction) {
    this.restaurantAddForm.addEventListener('submit', event => {
      event.preventDefault();
      const formData: FormData = new FormData(this.restaurantAddForm);
      const restaurantItem = Object.fromEntries(
        [...formData].map(([key, value]) => [key, key === 'distance' ? Number(value) : value]),
      ) as Restaurant;

      const errors: Errors = restaurantFormValidator.verify(restaurantItem);
      const hasError = Object.values(errors).some(error => error === true);

      if (!hasError) {
        this.restaurantAddForm.reset();
        this.modal.close();
        return onSubmitRestaurantAddForm(restaurantItem);
      }

      this.showErrorMessages(errors);
      this.addErrorMessageRemovingEvents();
    });
  }

  showErrorMessages(errors: Errors) {
    if (errors.category) {
      this.categoryInputCaption.classList.add('error-text');
      this.categoryInputCaption.classList.remove('not-visible');
    }

    if (errors.name) {
      this.nameInputCaption.classList.add('error-text');
      this.nameInputCaption.classList.remove('not-visible');
    }

    if (errors.distance) {
      this.distanceInputCaption.classList.add('error-text');
      this.distanceInputCaption.classList.remove('not-visible');
    }

    if (errors.link) {
      this.linkInputCaption.classList.add('error-text');
      this.linkInputCaption.textContent = ERROR_MESSAGE.INVALID_LINK;
    }
  }

  addCategoryChangeEvent() {
    this.categoryInput.addEventListener(
      'change',
      () => {
        this.categoryInputCaption.classList.remove('error-text');
        this.categoryInputCaption.classList.add('not-visible');
      },
      { once: true },
    );
  }

  addNameInputEvent() {
    this.nameInput.addEventListener(
      'input',
      () => {
        this.nameInputCaption.classList.remove('error-text');
        this.nameInputCaption.classList.add('not-visible');
      },
      { once: true },
    );
  }

  addDistanceChangeEvent() {
    this.distanceInput.addEventListener(
      'change',
      () => {
        this.distanceInputCaption.classList.remove('error-text');
        this.distanceInputCaption.classList.add('not-visible');
      },
      { once: true },
    );
  }

  addLinkInputEvent() {
    this.linkInput.addEventListener(
      'input',
      () => {
        this.linkInputCaption.classList.remove('error-text');
        this.linkInputCaption.textContent = MESSAGE.LINK_DEFAULT_CAPTION;
      },
      { once: true },
    );
  }

  addErrorMessageRemovingEvents() {
    this.addCategoryChangeEvent();
    this.addNameInputEvent();
    this.addDistanceChangeEvent();
    this.addLinkInputEvent();
  }

  addCloseButtonClickEvent() {
    this.closeButton.addEventListener('click', () => {
      this.restaurantAddForm.reset();
      this.modal.close();
    });
  }

  addModalBackdropClickEvent() {
    this.modal.addEventListener('click', event => {
      if (event.target instanceof HTMLDialogElement && event.target.nodeName === 'DIALOG') {
        event.target.close();
      }
    });
  }
}

export default ModalView;
