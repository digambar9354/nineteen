import { Routes } from '@angular/router';
import { UserTaskComponent } from './user-task/user-task.component';
import { AppComponent } from './app.component';
import { FinanceComponent } from './finance/finance.component';
import { MannagmentComponent } from './mannagment/mannagment.component';
import { MannagementModule } from './mannagment/mannagment.module';

export const routes: Routes = [
    {
        path: '', component: AppComponent
    },
    {
        path: 'user-task', component: UserTaskComponent
    },
    {
        path: 'finance', component: FinanceComponent
    },
    {
        path: 'management', loadChildren: () => import('./mannagment/mannagment.module').then((c) => c.MannagementModule),
    }
];
