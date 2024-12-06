import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ErrorService } from '../shared/service/error.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { ErrorModalComponent } from '../shared/modal/error-modal/error-modal.component';

@Component({
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
    imports: [
        ErrorModalComponent,
        RouterOutlet
    ]
})
export class AppComponent {
    title = 'nineteen';

    private errorService = inject(ErrorService);

    error = this.errorService.error;

    get debugOutput() {
        console.log('[AppComponent] "debugOutput" binding re-evaluated.');
        return 'AppComponent Component Debug Output';
    }

    ngOnInit() {
    }
}
