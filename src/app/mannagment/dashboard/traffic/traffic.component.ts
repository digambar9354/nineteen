import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
    selector: 'app-traffic',
    imports: [ItemComponent],
    standalone: true,
    templateUrl: './traffic.component.html'
})
export class TrafficComponent {
}
