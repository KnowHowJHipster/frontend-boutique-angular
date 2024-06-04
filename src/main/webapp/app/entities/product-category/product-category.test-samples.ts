import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 23247,
  name: 'incidentally underneath who',
};

export const sampleWithPartialData: IProductCategory = {
  id: 22366,
  name: 'yowza crepe',
  description: 'throughout airbag',
};

export const sampleWithFullData: IProductCategory = {
  id: 4700,
  name: 'so equality sometimes',
  description: 'pickle rehearse',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'since nicely overburden',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
