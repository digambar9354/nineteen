import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
    selector: 'app-change-detect',
    standalone: true,
    templateUrl: './detect-change.component.html',
    styleUrl: './detect-change.component.css',
    imports: [CounterComponent, MessagesComponent],
})
export class ChangeDetectComponent {
    get debugOutput() {
        console.log('[ChangeDetectComponent] "debugOutput" binding re-evaluated.');
        return 'ChangeDetectComponent Component Debug Output';
    }
}
