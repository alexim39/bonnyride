import { Routes } from "@angular/router";
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";


export const CustomerRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard'
   },
   {
        path: 'dashboard',
        children: [
            {
               path: '',
               component: CustomerDashboardComponent,
               title:"Customer dashboard - profile & asset management"
            },
            /* {
               
            },
            {
               path: 'signup',
               component: CustomerSignupComponent,
               title:"Customer registration - Identification process"
            }, */
        ]
   },

]
