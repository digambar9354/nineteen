import { Component, output } from "@angular/core";

@Component({
    selector: "app-new-task",
    styleUrl: "./new-task.component.scss",
    templateUrl: "./new-task.component.html",
})
export class NewTaskComponent {

    closeDiloag = output();


    constructor() {

    }

    closeDiloagEv() {
        this.closeDiloag.emit();
    }
}