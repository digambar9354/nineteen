import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { ApiService } from '../../../../shared/service/api.service';
import { catchError, map, Subscription, throwError } from 'rxjs';

@Component({
    selector: 'app-available-places',
    standalone: true,
    templateUrl: './available-places.component.html',
    styleUrl: './available-places.component.css',
    imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
    places = signal<Place[] | undefined>(undefined);
    destroyRef = inject(DestroyRef);

    private apiService = inject(ApiService);


    isLoading = signal(false);
    error = signal(undefined);


    ngOnInit(): void {
        this.getPlaces();
    }

    destroy(subscriber: Subscription) {
        this.destroyRef.onDestroy(() => {
            subscriber.unsubscribe();
        });
    }

    getPlaces() {
        this.isLoading.set(true);

        let subs = this.apiService.get('http://localhost:3000/places', {}).pipe(
            map((data: any) => data['places']),
            catchError((error) => throwError(() => new Error('Internal Server Error')))
        ).subscribe({
            next: (value: Place[]) => {
                return this.places.set(value);
            },
            error: (error) => {
                console.log(error);

                this.error.set(error);
            },
            complete: () => {
                this.isLoading.set(false);
            }
        });

        this.destroy(subs);
    }

    onSelectPlace(place: Place | any) {
        console.log(place);
        
        let subs = this.apiService.put('http://localhost:3000/user-places', {
            placeId: place?.id
        }).pipe(
            map((data: any) => data['places']),
            catchError((error) => throwError(() => new Error('Internal Server Error')))
        ).subscribe({
            next: (value: Place[]) => {
                // this.places.set(value);
            },
            error: (error) => {
                console.log(error);
                // this.error.set(error);
            },
            complete: () => {
                this.isLoading.set(false);
            }
        });

        this.destroy(subs);
    }
}
