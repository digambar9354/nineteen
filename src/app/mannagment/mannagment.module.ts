import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';

import { MannagmentComponent } from './mannagment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { mannagmentRoutes } from './mannagment.routes';
import { HeaderComponent } from "../header/header.component";


@NgModule({
    declarations: [MannagmentComponent, DashboardComponent],
    imports: [
        HeaderComponent,
        RouterModule.forChild(mannagmentRoutes)
    ],
    providers: [
    ]

})
export class MannagementModule { }