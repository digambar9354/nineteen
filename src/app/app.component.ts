import { Component, effect, signal } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from "./user/user.component";

import { ApiService } from '../shared/service/api.service'
import { UserInterface } from './user/user.model';
import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'app-root',
    styleUrl: './app.component.scss',
    templateUrl: './app.component.html',
    imports: [HeaderComponent, FooterComponent, UserComponent, TasksComponent],
})
export class AppComponent {
    title = 'nineteen';

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
