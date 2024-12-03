import { Injectable, signal } from "@angular/core";

import { Task, TaskStatus } from './task.model';

@Injectable({
    providedIn: 'platform'
})
export class TaskService {
    private task = signal<Array<Task>>([]);

    allTask = this.task.asReadonly();

    addTask(data: { title: string, description: string }) {

        const newTask: Task = {
            ...data,
            id: Math.random().toString(),
            status: 'OPEN'
        }

        this.task.update((oldTask) => [...oldTask, newTask]);


        console.log(this.task());


    }

    updateTaskStatus(taskId: string, status: TaskStatus) {
        this.task.update((tasks: Task[]) => {
            return tasks.map((task: Task) => task.id == taskId ? { ...task, status } : task);
        });

    }
}