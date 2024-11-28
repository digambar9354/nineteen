import { Component, effect, signal } from "@angular/core";


import { ApiService } from '../../shared/service/api.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { UserInterface } from './user/user.model';

@Component({
    selector: 'app-user-task',
    templateUrl: "./user-task.component.html",
    styleUrl: "./user-task.component.scss",
    imports: [HeaderComponent, FooterComponent, UserComponent, TasksComponent],
})
export class UserTaskComponent{
    users = signal<Array<UserInterface>>([]);
    loadingUser = signal<boolean>(false);

    userDetails = signal<UserInterface | any>(null);

    constructor(
        private apiService: ApiService
    ) {
        this.getUsers();
    }

    getUsers() {
        this.apiService.getUserList().subscribe((value: any) => {
            this.users.set(value);
        });
        effect(() => {
            console.log(`The current count is: ${this.users()}`);
        });
    }

    captureUser(userDetails: UserInterface) {
        this.userDetails.set(userDetails)
        console.log(userDetails)
    }
}