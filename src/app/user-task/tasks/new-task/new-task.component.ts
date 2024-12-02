import { Component, input, output, signal, InputSignal } from "@angular/core";

import { FormsModule } from "@angular/forms"
import { SharedModule } from "../../../../shared/shared.module";

import { TaskInterface } from '../task/task.model';

@Component({
    selector: "app-new-task",
    styleUrl: "./new-task.component.scss",
    templateUrl: "./new-task.component.html",
    imports: [SharedModule, FormsModule],
})
export class NewTaskComponent {

    userid = input.required<number | string>();
    closeDiloag = output();
    updateTasks = output<Array<TaskInterface>>();

    task = input<Array<TaskInterface>>([]);

    title = signal('');
    summary = signal('');
    dueDate = signal('');

    event = signal<Array<TaskInterface>>([]);

    constructor() {
    }

    ngOnChanges() {
        this.event.set(this.task());
    }


    closeDiloagEv() {
        this.closeDiloag.emit();
    }

    saveTask() {

        let data: TaskInterface = {
            id: (this.event()?.length ?? 0) + 1,
            userId: this.userid(),
            title: this.title(),
            summary: this.summary(),
            dueDate: this.dueDate()
        }

        this.event.update(e => {
            if (e?.length) {
                e.push(data)
            } else {
                e = [data]
            }
            return e;
        })

        this.updateTasks.emit(this.event());
    }
}