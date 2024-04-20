import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
import { IndexPageComponent } from "./index-page";
import { CustomerSigninComponent } from "../auth/customer/signin/customer-signin.component";
import { CustomerSignupComponent } from "../auth/customer/signup/customer-signup.component";
import { PartnerSigninComponent } from "../auth/partner/signin/partner-signin.component";
import { PartnerSignupComponent } from "../auth/partner/signup/partner-signup.component";

export const IndexRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    { 
        path: 'home', 
        component: IndexComponent, 

        children: [
            { path: '', 
                component: IndexPageComponent, 
                title: "Async Training Portal - Manage your learning"
            },
            { path: 'about-async', 
                loadComponent: () => import('../about/about.component').then(c => c.AboutComponent),
                title: "About Us - Easy means to know about us"
            },
            { path: 'feedback', 
                loadComponent: () => import('../feedback/feedback.component').then(c => c.FeedbackComponent),
                title: "Customer Feedback - Tell us how you feel about our services"
            },
            { path: 'contacts', 
                loadComponent: () => import('../contact/contact.component').then(c => c.ContactComponent),
                title: "Contact Us - Easy means of reaching us"
            },
            { path: 'book-later', 
                loadComponent: () => import('../book-later/book-later.component').then(c => c.BookLaterComponent),
                title: "Book for Later - Book a cab for later use"
            },
            { path: 'order-now', 
                loadComponent: () => import('../order-now/order-now.component').then(c => c.OrderNowComponent),
                title: "Order Instant Ride - Order a cab for instant use"
            },
            { path: 'price-list', 
                loadComponent: () => import('../price-list/price-list.component').then(c => c.PriceListComponent),
                title: "Price List - See list of our cab fares"
            },
            { path: 'payment-success', 
                loadComponent: () => import('../payment-success.component').then(c => c.PaymentSuccessComponent),
                title: "Payment Information - Payment process completion"
            },
            { path: 'faq', 
                loadComponent: () => import('../faq/faq.component').then(c => c.faqsComponent),
                title: "Frequently Asked Questions - Get answers to common questions"
            },
            {
                path: 'auth',
                children: [
                    {
                        path: '',
                        redirectTo: 'partner'
                    },
                    {
                        path: 'customer',
                        //component: AuthIndexComponent, 
                        children: [
                            {
                               path: '',
                               redirectTo: 'signin'
                            },
                            {
                               path: 'signin',
                               component: CustomerSigninComponent,
                               title:"Customer authentication - Identification process"
                            },
                            {
                               path: 'signup',
                               component: CustomerSignupComponent,
                               title:"Customer registration - Identification process"
                            },
                        ]
                   },
                   {
                      path: 'partner',
                      //component: AuthIndexComponent, 
                      children: [
                         {
                            path: '',
                            redirectTo: 'signin'
                         },
                         {
                            path: 'signin',
                            component: PartnerSigninComponent,
                            title:"Partner authentication - Identification process"
                         },
                         {
                            path: 'signup',
                            component: PartnerSignupComponent,
                            title:"Partner registration - Identification process"
                         },
                      ]
                   },
                ]
            },
            { path: 'cab-services', 
                loadComponent: () => import('../services/cab/cab-services.component').then(c => c.CabServicesComponent),
                title: "Cab services - Book/Order a cab"
            },
            { path: 'tow-services', 
                loadComponent: () => import('../services/tow/tow-services.component').then(c => c.TowServicesComponent),
                title: "Tow truck services - Book/Order a cab"
            },
            { path: 'courier-services', 
                loadComponent: () => import('../services/courier/courier-services.component').then(c => c.CourierServicesComponent),
                title: "Courier services - Book/Order a cab"
            },
        ]
    },

]
