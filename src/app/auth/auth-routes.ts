import { Routes } from "@angular/router";
import { CustomerSigninComponent } from "./customer/signin/customer-signin.component";
import { CustomerSignupComponent } from "./customer/signup/customer-signup.component";
import { CarownerSigninComponent } from "./car-owner/signin/car-ower-signin.component";
import { CarownerSignupComponent } from "./car-owner/signup/car-ower-signup.component";

export const AuthRoutes: Routes = [
   {
      path: '',
      redirectTo: 'car-owner'
   },
   {
        path: 'customer',
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
      path: 'car-owner',
      children: [
         {
            path: '',
            redirectTo: 'signin'
         },
         {
            path: 'signin',
            component: CarownerSigninComponent,
            title:"Car owner authentication - Identification process"
         },
         {
            path: 'signup',
            component: CarownerSignupComponent,
            title:"Car owner registration - Identification process"
         },
      ]
   },

]
