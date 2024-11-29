import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { ItemComponent } from './item/item.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [TrafficComponent, TicketsComponent, ServerStatusComponent],
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {

}
