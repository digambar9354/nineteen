import { Component, input, signal } from "@angular/core";

import { TaskComponent } from './task/task.component';
import { UserInterface } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
    selector: "app-tasks",
    styleUrl: "./tasks.component.scss",
    templateUrl: "./tasks.component.html",
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
    userDetails = input.required<UserInterface>();

    isTask = signal<boolean>(false)

    initiateTaks() {
        this.isTask.set(true);
    }

    closeDiloag() {
        this.isTask.set(false);
    }
}