import { Component, input } from '@angular/core';

@Component({
    selector: 'p6-control, input[p6-control], select[p6-control], textarea[p6-control]',
    standalone: false,
    templateUrl: './p6-input.component.html',
    styleUrl: './p6-input.component.scss'
})
export class P6InputComponent {
    for = input<string>();
    label = input<string>();
}
