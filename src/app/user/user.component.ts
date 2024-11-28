import { Component, computed, input, Input, output, signal } from '@angular/core';
import { UserInterface } from './user.model';

@Component({
    selector: 'app-user',
    styleUrl: './user.component.scss',
    templateUrl: './user.component.html',
})

export class UserComponent {

    user = input.required<UserInterface>();
    selectedUserId = input.required<number | null>();

    emitDetails = output<UserInterface>();

    url = computed(() => this.user().avatar_url);
    userName = computed(() => this.user().login);

    constructor() {
    }

    emitOnclick() {
        this.emitDetails.emit(this.user());
    }
}