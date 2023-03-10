import { REGEX, RESTAURANT_NAME_LIMIT } from '../constants/constants';
import { Errors, Restaurant } from '../types/types';

const restaurantFormValidator = {
  verify(restaurantItem: Restaurant) {
    const errors: Errors = {};

    errors['category'] = this.isEmptyCategory(restaurantItem.category);
    errors['name'] = this.isInvalidName(restaurantItem.name);
    errors['distance'] = this.isEmptyDistance(restaurantItem.distance);
    errors['link'] = this.isInvalidLink(restaurantItem.link);

    return errors;
  },

  isEmptyCategory(input: string) {
    return input === '';
  },

  isEmptyDistance(input: number) {
    return input === 0;
  },

  isInvalidName(input: string) {
    if (input.length > RESTAURANT_NAME_LIMIT) return true;
    return !REGEX.VALID_NAME.test(input);
  },

  isInvalidLink(input: string | undefined) {
    if (input) return !REGEX.VALID_URL.test(input);
    return false;
  },
};

export default restaurantFormValidator;
