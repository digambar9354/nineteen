import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';

import { MannagmentComponent } from './mannagment.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { mannagmentRoutes } from './mannagment.routes';
import { HeaderComponent } from "../header/header.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";


@NgModule({
    declarations: [MannagmentComponent],
    imports: [
        HeaderComponent,
        RouterModule.forChild(mannagmentRoutes),
        ServerStatusComponent,
        TrafficComponent,
        TicketsComponent
    ],
    providers: [
    ]

})
export class MannagementModule { }