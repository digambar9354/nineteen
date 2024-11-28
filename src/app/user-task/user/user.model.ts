

export interface UserInterface {
    id: number;
    login: string;
    avatar_url: string;
    events_url: string;
    url: string;
}


export class UserModel {
    public id: number;
    public login: string;
    public avatar_url: string;
    public events_url: string;

    constructor() {
        this.id = 0;
        this.login = '';
        this.avatar_url = '';
        this.events_url = '';
    }
}