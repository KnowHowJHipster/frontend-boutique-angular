import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 14094,
  login: '2$dumr@hn\\oFU\\}7gr\\{y5ls\\V7h\\1v',
};

export const sampleWithPartialData: IUser = {
  id: 28420,
  login: 'VEeQT@scd\\;u\\Tn-Xb1\\WgvG',
};

export const sampleWithFullData: IUser = {
  id: 26845,
  login: '3@S0U\\hC\\aMoZ',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
