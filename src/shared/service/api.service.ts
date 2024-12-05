import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient
    ) {

    }

    get(url: string, params: {}) {
        return this.http.get(url, { params });
    }

    post(url: string, body: {}) {
        return this.http.post(url, body);
    }

    put(url: string, body: {}) {
        return this.http.put(url, body)
    }

    getUserList() {
        return this.http.get('https://api.github.com/users', { params: { 'per_page': 5, 'page': 1, 'q': 'pixel6' } })
    }

    getUserEvents(url: string) {
        return this.http.get(`${url}/events`);
    }

}