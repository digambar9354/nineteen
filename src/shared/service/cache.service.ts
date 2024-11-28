import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    constructor() {

    }

    getCache(key: string) {
        let localDate: any = localStorage.getItem(key);
        return JSON.parse(localDate);
    }

    setCache(key: string, data: any) {
        let localDate = JSON.stringify(data);
        localStorage.setItem(key, localDate);
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }
}