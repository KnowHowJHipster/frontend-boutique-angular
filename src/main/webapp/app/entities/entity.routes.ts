import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'boutiqueApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'boutiqueApp.product.home.title' },
    loadChildren: () => import('./product/product.routes'),
  },
  {
    path: 'product-category',
    data: { pageTitle: 'boutiqueApp.productCategory.home.title' },
    loadChildren: () => import('./product-category/product-category.routes'),
  },
  {
    path: 'customer-details',
    data: { pageTitle: 'boutiqueApp.customerDetails.home.title' },
    loadChildren: () => import('./customer-details/customer-details.routes'),
  },
  {
    path: 'shopping-cart',
    data: { pageTitle: 'boutiqueApp.shoppingCart.home.title' },
    loadChildren: () => import('./shopping-cart/shopping-cart.routes'),
  },
  {
    path: 'product-order',
    data: { pageTitle: 'boutiqueApp.productOrder.home.title' },
    loadChildren: () => import('./product-order/product-order.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
