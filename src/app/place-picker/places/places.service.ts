import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';

import { ApiService } from '../../../shared/service/api.service';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlacesService {
    private apiService = inject(ApiService);
    private userPlaces = signal<Place[]>([]);

    loadedUserPlaces = this.userPlaces.asReadonly();

    loadAvailablePlaces() {
        let subs = this.apiService.get('http://localhost:3000/places', {}).pipe(
            map((data: any) => data['places']),
            catchError((error) => throwError(() => new Error('Internal Server Error')))
        ).subscribe({
            next: (value: Place[]) => {
                this.userPlaces.set(value);
            }
        });
    }

    loadUserPlaces() {
        let subs = this.apiService.get('http://localhost:3000/user-places', {}).pipe(
            map((data: any) => data['places']),
            catchError((error) => throwError(() => new Error('Internal Server Error')))
        ).subscribe({
            next: (value: Place[]) => {
                this.userPlaces.set(value);
            }
        });
    }

    addPlaceToUserPlaces(place: Place) {
        let subs = this.apiService.put('http://localhost:3000/user-places', {
            placeId: place?.id
        }).pipe(
            map((data: any) => data['places']),
            catchError((error) => throwError(() => new Error('Internal Server Error')))
        ).subscribe({
            next: (value: Place[]) => {
                this.userPlaces.set(value);
            },
            error: (error) => {
                console.log(error);
                // this.error.set(error);
            },
            complete: () => {
            }
        });
    }

    removeUserPlace(place: Place) { }
}
