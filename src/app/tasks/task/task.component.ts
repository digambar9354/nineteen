import { Component, input, signal } from "@angular/core"
import { DatePipe } from '@angular/common';

import { UserInterface } from '../../user/user.model';
import { ApiService } from '../../../shared/service/api.service';
import { TaskInterface } from './task.model';

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrl: "./task.component.scss",
    imports: [DatePipe]
})
export class TaskComponent {
    userDetails = input.required<UserInterface>();

    event = signal<Array<TaskInterface>>([])

    constructor(
        private apiService: ApiService) {

    }

    ngOnChanges() {
        this.getEvents();
    }

    getEvents() {
        this.apiService.getUserEvents(this.userDetails().url).subscribe((event: any) => {
            this.event.set(event);
        })
    }

    completeTask(id: string) {
        this.event.update(value => {
            console.log(value)
            return value.filter(e => e.id != id);
        })
    }
}