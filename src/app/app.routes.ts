import { Routes } from '@angular/router';
import { UserTaskComponent } from './user-task/user-task.component';
import { FinanceComponent } from './finance/finance.component';
import { RouteNotFoundComponent } from './404/404.component';

import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'tasks', pathMatch: 'full'
    },
    {
        path: 'tasks', component: TasksComponent
    },
    {
        path: 'user-task', component: UserTaskComponent
    },
    {
        path: 'finance', component: FinanceComponent
    },
    {
        path: 'management', loadChildren: () => import('./mannagment/mannagment.module').then((c) => c.MannagementModule),
    },
    { path: '**', component: RouteNotFoundComponent }
];
