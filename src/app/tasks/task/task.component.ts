import { Component, input, output, signal } from "@angular/core"
import { DatePipe } from '@angular/common';

import { UserInterface } from '../../user/user.model';
import { TaskInterface } from './task.model';

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.scss",
    imports: [DatePipe]
})
export class TaskComponent {
    userDetails = input.required<UserInterface>();
    task = input.required<Array<TaskInterface>>();
    updateTasks = output<Array<TaskInterface>>();

    event = signal<Array<TaskInterface>>([]);

    constructor() {
    }

    ngOnChanges() {
        this.getEvents();
    }
                      
    getEvents() {
        this.event.set(this.task());
        console.log(this.task())
    }

    completeTask(id: string | number) {
        this.event.update(value => {
            console.log(value)
            return value.filter((e: TaskInterface)=> e.id != id);
        })
        this.updateTasks.emit(this.task());
    }
}