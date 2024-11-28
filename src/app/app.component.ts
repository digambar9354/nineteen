import { Component } from '@angular/core';
import { UserTaskComponent } from './user-task/user-task.component';

@Component({
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
    imports: [UserTaskComponent]
})
export class AppComponent {
    title = 'nineteen';
}
