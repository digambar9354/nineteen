import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { NewTaskComponent } from "../../../user-task/tasks/new-task/new-task.component";

@Component({
    selector: 'app-tickets',
    imports: [ItemComponent, NewTicketComponent],
    templateUrl: './tickets.component.html'
})
export class TicketsComponent {
}
