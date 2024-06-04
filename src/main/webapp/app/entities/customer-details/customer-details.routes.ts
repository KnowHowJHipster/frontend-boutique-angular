import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { CustomerDetailsComponent } from './list/customer-details.component';
import { CustomerDetailsDetailComponent } from './detail/customer-details-detail.component';
import { CustomerDetailsUpdateComponent } from './update/customer-details-update.component';
import CustomerDetailsResolve from './route/customer-details-routing-resolve.service';

const customerDetailsRoute: Routes = [
  {
    path: '',
    component: CustomerDetailsComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CustomerDetailsDetailComponent,
    resolve: {
      customerDetails: CustomerDetailsResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CustomerDetailsUpdateComponent,
    resolve: {
      customerDetails: CustomerDetailsResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CustomerDetailsUpdateComponent,
    resolve: {
      customerDetails: CustomerDetailsResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default customerDetailsRoute;
