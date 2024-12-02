import { Routes } from '@angular/router';
import { MannagmentComponent } from './mannagment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const mannagmentRoutes: Routes = [
    {
        path: '', component: MannagmentComponent, 
        children: [
            {
                path: '', redirectTo: 'dahsboard', pathMatch: 'full'
            },
            {
                path: 'dahsboard', component: DashboardComponent
            }
        ]
    }
];