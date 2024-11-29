import { Routes } from '@angular/router';
import { MannagmentComponent } from './mannagment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const mannagmentRoutes: Routes = [
    {
        path: '', component: MannagmentComponent, children: [
            {
                path: 'dahsboard', component: DashboardComponent
            }
        ]
    }
];