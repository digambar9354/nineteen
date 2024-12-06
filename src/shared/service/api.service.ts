import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    commonPath = 'http://localhost:3000/';

    constructor(
        private http: HttpClient
    ) {

    }

    commonError(error: HttpErrorResponse) {
        return throwError(() => {
            let errorMessage = '';

            switch (error?.status) {
                case 0:
                    errorMessage = 'Please check your network!';
                    break;

                case 500:
                    errorMessage = error.statusText;
                    break;

                default:
                    errorMessage = "Internal Server Error";
                    break;
            }
            return Error(errorMessage);
        })
    }

    get(url: string, params: {}) {
        return this.http.get(this.commonPath + url, { headers: params }).pipe(
            catchError((error: HttpErrorResponse) => {
                return this.commonError(error);
            })
        );
    }

    delete(url: string, params: {id: string}) {
        console.log(`${this.commonPath + url}?id=${params.id}`);
        
        return this.http.delete(`${this.commonPath + url}'?id='${params.id}`).pipe(
            catchError((error: HttpErrorResponse) => {
                return this.commonError(error);
            })
        );
    }

    post(url: string, body: {}) {
        return this.http.post(this.commonPath + url, body).pipe(
            catchError((error: HttpErrorResponse) => {
                return this.commonError(error);
            })
        );;
    }

    put(url: string, body: {}) {
        return this.http.put(this.commonPath + url, body).pipe(
            catchError((error: HttpErrorResponse) => {
                return this.commonError(error);
            })
        );;
    }
}