import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', loadChildren: () => import('./index/index-routes').then(routes => routes.IndexRoutes) },
  { path: 'partner', loadChildren: () => import('./partner/partner-routes').then(routes => routes.PartnerRoutes) },
  { path: 'customer', loadChildren: () => import('./customer/customer-routes').then(routes => routes.CustomerRoutes) },

  // should be the last path on routes
  { path: '**', 
    component: PageNotFoundComponent,
    title: "Page not found - Wrong page"
  }

];
