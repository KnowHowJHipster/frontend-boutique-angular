import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b7b2ca95-8373-49eb-94c5-8e6741c94481',
};

export const sampleWithPartialData: IAuthority = {
  name: 'c0078cf3-a6a7-41eb-a7d9-0332746cfbc7',
};

export const sampleWithFullData: IAuthority = {
  name: '154eb58e-44f8-482c-8b9a-ac2eb18e359a',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
