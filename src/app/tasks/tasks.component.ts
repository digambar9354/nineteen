import { Component, input, signal } from "@angular/core";

import { TaskComponent } from './task/task.component';
import { UserInterface } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { CacheService } from '../../shared/service/cache.service';
import { TaskInterface } from './task/task.model';

@Component({
    selector: "app-tasks",
    styleUrl: "./tasks.component.scss",
    templateUrl: "./tasks.component.html",
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
    userDetails = input.required<UserInterface>();

    isTask = signal<boolean>(false)
    task = signal<Array<TaskInterface>>([]);


    constructor(private cacheService: CacheService) {
        this.task.set(this.cacheService.getCache('task'))
    }

    initiateTaks() {
        this.isTask.set(true);
    }

    closeDiloag() {
        this.task.set(this.cacheService.getCache('task'));
        this.isTask.set(false);
    }

    updateTasks(task: TaskInterface[]) {
        this.task.set(task);
        console.log(task);
        
        this.cacheService.setCache('task', this.task());
        this.isTask.set(false);
    }

}