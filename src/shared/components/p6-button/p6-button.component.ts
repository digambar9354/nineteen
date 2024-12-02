import { Component, input } from '@angular/core';

@Component({
    selector: 'p6-button ,button[p6-button], a[p6-button]',
    standalone: false,
    templateUrl: './p6-button.component.html',
    styleUrl: './p6-button.component.scss',
})
export class P6ButtonComponent {
    icon = input<string | undefined>();
}
