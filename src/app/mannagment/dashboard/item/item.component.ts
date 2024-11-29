import { Component, input } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
})
export class ItemComponent {
    img = input.required<{ src: string, alt: string }>();
    title = input.required<string>();
}
