import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ICustomerDetails } from '../customer-details.model';
import { CustomerDetailsService } from '../service/customer-details.service';

const customerDetailsResolve = (route: ActivatedRouteSnapshot): Observable<null | ICustomerDetails> => {
  const id = route.params['id'];
  if (id) {
    return inject(CustomerDetailsService)
      .find(id)
      .pipe(
        mergeMap((customerDetails: HttpResponse<ICustomerDetails>) => {
          if (customerDetails.body) {
            return of(customerDetails.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default customerDetailsResolve;
