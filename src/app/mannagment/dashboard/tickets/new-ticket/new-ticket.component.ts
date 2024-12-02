import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
    selector: 'app-new-ticket',
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.scss',
    imports: [SharedModule]
})
export class NewTicketComponent { }
