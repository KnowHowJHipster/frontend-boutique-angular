import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 7642,
  name: 'sneer',
  price: 24316.9,
  productSize: 'L',
};

export const sampleWithPartialData: IProduct = {
  id: 10627,
  name: 'curvy delegate upside-down',
  price: 21286.88,
  productSize: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 30712,
  name: 'hydrofoil excess',
  description: 'only redraw embargo',
  price: 22715.8,
  productSize: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'midst',
  price: 23047.14,
  productSize: 'XXL',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
