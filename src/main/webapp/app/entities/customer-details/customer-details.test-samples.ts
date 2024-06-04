import { ICustomerDetails, NewCustomerDetails } from './customer-details.model';

export const sampleWithRequiredData: ICustomerDetails = {
  id: 3795,
  gender: 'OTHER',
  phone: '293-410-5801 x85952',
  addressLine1: 'pretty',
  city: 'East Antoninaville',
  country: 'United Kingdom',
};

export const sampleWithPartialData: ICustomerDetails = {
  id: 4968,
  gender: 'MALE',
  phone: '911.872.9373 x0287',
  addressLine1: 'ick',
  addressLine2: 'unsung bah',
  city: 'Fort Jeremy',
  country: 'Russian Federation',
};

export const sampleWithFullData: ICustomerDetails = {
  id: 248,
  gender: 'MALE',
  phone: '(995) 337-4635 x16856',
  addressLine1: 'frosting',
  addressLine2: 'for',
  city: 'Georgettefield',
  country: 'Hungary',
};

export const sampleWithNewData: NewCustomerDetails = {
  gender: 'OTHER',
  phone: '753-722-4501 x930',
  addressLine1: 'correctly than',
  city: 'Harveyport',
  country: 'Kuwait',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
