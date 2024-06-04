import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { ShoppingCartComponent } from './list/shopping-cart.component';
import { ShoppingCartDetailComponent } from './detail/shopping-cart-detail.component';
import { ShoppingCartUpdateComponent } from './update/shopping-cart-update.component';
import ShoppingCartResolve from './route/shopping-cart-routing-resolve.service';

const shoppingCartRoute: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ShoppingCartDetailComponent,
    resolve: {
      shoppingCart: ShoppingCartResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ShoppingCartUpdateComponent,
    resolve: {
      shoppingCart: ShoppingCartResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ShoppingCartUpdateComponent,
    resolve: {
      shoppingCart: ShoppingCartResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default shoppingCartRoute;
