import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IShoppingCart } from '../shopping-cart.model';
import { ShoppingCartService } from '../service/shopping-cart.service';

const shoppingCartResolve = (route: ActivatedRouteSnapshot): Observable<null | IShoppingCart> => {
  const id = route.params['id'];
  if (id) {
    return inject(ShoppingCartService)
      .find(id)
      .pipe(
        mergeMap((shoppingCart: HttpResponse<IShoppingCart>) => {
          if (shoppingCart.body) {
            return of(shoppingCart.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default shoppingCartResolve;
