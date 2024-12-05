import { Routes } from '@angular/router';
import { UserTaskComponent } from './user-task/user-task.component';
import { FinanceComponent } from './finance/finance.component';
import { RouteNotFoundComponent } from './404/404.component';

import { TasksComponent } from './tasks/tasks.component';
import { ChangeDetectComponent } from './change-detect/detect-change.component';
import { PlacePickerComponent } from './place-picker/place-picker.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'place-picker', pathMatch: 'full'
    },
    {
        path: 'place-picker', component: PlacePickerComponent
    },
    {
        path: 'cd-change', component: ChangeDetectComponent
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
