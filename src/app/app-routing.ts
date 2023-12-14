import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: IndexComponent },
  { path: 'about-async', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
  { path: 'feedback', loadComponent: () => import('./feedback/feedback.component').then(c => c.FeedbackComponent) },
  { path: 'book-later', loadComponent: () => import('./book-later/book-later.component').then(c => c.BookLaterComponent) },
  { path: 'order-now', loadComponent: () => import('./order-now/order-now.component').then(c => c.OrderNowComponent) },
  { path: 'price-list', loadComponent: () => import('./price-list/price-list.component').then(c => c.PriceListComponent) },
  //{ path: 'booking', loadChildren: () => import('./portal/booking/booking-routes').then(c => c.BookingListRoutes) },

  // should be the last path on routes
  {path: '**', component: PageNotFoundComponent}

];
