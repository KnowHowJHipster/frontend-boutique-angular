import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 11267,
  quantity: 2334,
  totalPrice: 3750.82,
};

export const sampleWithPartialData: IProductOrder = {
  id: 489,
  quantity: 6132,
  totalPrice: 30941.33,
};

export const sampleWithFullData: IProductOrder = {
  id: 18959,
  quantity: 6306,
  totalPrice: 24706.32,
};

export const sampleWithNewData: NewProductOrder = {
  quantity: 21256,
  totalPrice: 21618.82,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
