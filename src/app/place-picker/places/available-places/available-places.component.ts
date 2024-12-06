import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Subscription } from 'rxjs';

import { PlacesService } from '../places.service';
import { ErrorService } from '../../../../shared/service/error.service';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

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

    isLoading = signal(false);

    private placesService = inject(PlacesService);
    private errorService = inject(ErrorService);

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

        let subs = this.placesService.loadAvailablePlaces().subscribe({
            next: (value: Place[]) => {
                return this.places.set(value);
            }, error: (error: string) => {
                this.errorService.showError(error);
            }, complete: () => {
                this.isLoading.set(false);
            }
        });

        this.destroy(subs);
    }

    onSelectPlace(place: Place | any) {
        let subs = this.placesService.addPlaceToUserPlaces({ placeId: place?.id }).subscribe({
            complete: () => {
                this.isLoading.set(false);
            }
        });

        this.destroy(subs);
    }
}
