import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', 
    component: IndexComponent, 
    title: "Async Training Portal - Manage your learning"
  },
  { path: 'about-async', 
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent),
    title: "About Us - Easy means to know about us"
  },
  { path: 'feedback', 
    loadComponent: () => import('./feedback/feedback.component').then(c => c.FeedbackComponent),
    title: "Customer Feedback - Tell us how you feel about our services"
  },
  { path: 'contacts', 
    loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent),
    title: "Contact Us - Easy means of reaching us"
  },
  { path: 'book-later', 
    loadComponent: () => import('./book-later/book-later.component').then(c => c.BookLaterComponent),
    title: "Book for Later - Book a cab for later use"
  },
  { path: 'order-now', 
    loadComponent: () => import('./order-now/order-now.component').then(c => c.OrderNowComponent),
    title: "Order Instant Ride - Order a cab for instant use"
  },
  { path: 'price-list', 
    loadComponent: () => import('./price-list/price-list.component').then(c => c.PriceListComponent),
    title: "Price List - See list of our cab fares"
  },
  { path: 'payment-success', 
    loadComponent: () => import('./payment-success.component').then(c => c.PaymentSuccessComponent),
    title: "Payment Information - Payment process completion"
  },
  { path: 'faq', 
    loadComponent: () => import('./faq/faq.component').then(c => c.faqsComponent),
    title: "Frequently Asked Questions - Get answers to common questions"
  },
  //{ path: 'auth', loadChildren: () => import('./portal/booking/booking-routes').then(c => c.BookingListRoutes) },
  { path: 'auth', loadChildren: () => import('./auth/auth-routes').then(routes => routes.AuthRoutes) },

  // should be the last path on routes
  { path: '**', 
    component: PageNotFoundComponent,
    title: "Page not found - Wrong page"
  }

];
