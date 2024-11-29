import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    selector: 'app-server-status',
    imports: [ItemComponent],
    templateUrl: './server-status.component.html'
})
export class ServerStatusComponent {

    currentStatus = 'online';

}
