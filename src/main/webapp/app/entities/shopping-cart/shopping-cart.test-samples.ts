import dayjs from 'dayjs/esm';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 17388,
  placedDate: dayjs('2024-06-04T01:47'),
  status: 'PAID',
  totalPrice: 30367.93,
  paymentMethod: 'IDEAL',
};

export const sampleWithPartialData: IShoppingCart = {
  id: 31418,
  placedDate: dayjs('2024-06-04T09:51'),
  status: 'CANCELLED',
  totalPrice: 26148.01,
  paymentMethod: 'IDEAL',
};

export const sampleWithFullData: IShoppingCart = {
  id: 16969,
  placedDate: dayjs('2024-06-03T21:11'),
  status: 'COMPLETED',
  totalPrice: 29590.23,
  paymentMethod: 'IDEAL',
  paymentReference: 'extremely',
};

export const sampleWithNewData: NewShoppingCart = {
  placedDate: dayjs('2024-06-04T08:21'),
  status: 'PENDING',
  totalPrice: 31119.07,
  paymentMethod: 'CREDIT_CARD',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
