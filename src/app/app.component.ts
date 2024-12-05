import { Component } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
    imports: [
        RouterOutlet
    ]
})
export class AppComponent {
    title = 'nineteen';

    get debugOutput() {
        console.log('[AppComponent] "debugOutput" binding re-evaluated.');
        return 'AppComponent Component Debug Output';
    }
}
