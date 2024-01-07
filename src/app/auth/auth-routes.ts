import { Routes } from "@angular/router";
import { CustomerSigninComponent } from "./customer/signin/customer-signin.component";
import { CustomerSignupComponent } from "./customer/signup/customer-signup.component";
import { PartnerSigninComponent } from "./partner/signin/partner-signin.component";
import { PartnerSignupComponent } from "./partner/signup/partner-signup.component";

export const AuthRoutes: Routes = [
   {
      path: '',
      redirectTo: 'partner'
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
      path: 'partner',
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
