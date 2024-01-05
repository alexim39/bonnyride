import { Routes } from "@angular/router";
import { CustomerSigninComponent } from "./customer-signin.component";
import { CustomerSignupComponent } from "./customer-signup.component";
import { CarownerSigninComponent } from "./car-ower-signin.component";
import { CarownerSignupComponent } from "./car-ower-signup.component";

export const AuthRoutes: Routes = [
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
