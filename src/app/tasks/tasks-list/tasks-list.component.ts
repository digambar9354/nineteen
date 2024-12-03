import { Component, inject, signal, computed } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.css',
    imports: [TaskItemComponent],
})
export class TasksListComponent {
    private taskService = inject(TaskService);
    selectedFilter = signal<string>('all');

    tasks = computed(() => {
        switch (this.selectedFilter()) {
            case 'all':
                return this.taskService.allTask();
            case 'open':
                return this.taskService.allTask().filter((task) => task.status == 'OPEN');
            case 'in-progress':
                return this.taskService.allTask().filter((task) => task.status == 'IN_PROGRESS');
            default:
                return this.taskService.allTask().filter((task) => task.status == 'DONE');
        }
    });

    constructor() {
        console.log(this.tasks);
    }

    onChangeTasksFilter(filter: string) {
        this.selectedFilter.set(filter);
    }
}
