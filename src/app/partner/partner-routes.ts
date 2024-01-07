import { Routes } from "@angular/router";
import { PartnerDashboardComponent } from "./partner-dashboard/partner-dashboard.component";


export const PartnerRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard'
   },
   {
        path: 'dashboard',
        children: [
            {
               path: '',
               component: PartnerDashboardComponent,
               title:"Partner dashboard - profile & asset management"
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
