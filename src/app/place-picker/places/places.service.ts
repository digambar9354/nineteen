import { Injectable, signal, inject } from '@angular/core';

import { Place } from './place.model';
import { ApiService } from '../../../shared/service/api.service';
import { map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlacesService {
    private userPlaces = signal<Place[]>([]);
    private apiService = inject(ApiService)

    loadedUserPlaces = this.userPlaces.asReadonly();

    loadAvailablePlaces() {
        return this.apiService.get('places', {}).pipe(
            map((data: any) => data['places'])
        );
    }

    loadUserPlaces() {
        return this.apiService.get('user-places', {}).pipe(
            map((data: any) => data['places']),
            tap((data) => this.userPlaces.set(data))
        );
    }

    addPlaceToUserPlaces(data: {}) {
        return this.apiService.put('user-places', data).pipe(
            map((data: any) => data['userPlaces']),
            tap((data) => this.userPlaces.set(data))
        );
    }


    removeUserPlace(place: Place) {
        console.log('removeUserPlace');
        
        return this.apiService.delete('user-places', { id: place.id }).pipe(
            map((data: any) => data['userPlaces']),
            tap((data) => this.userPlaces.set(data))
        );
    }

}
