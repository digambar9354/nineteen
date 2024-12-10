import { Component, DestroyRef, inject, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { ApiService } from '../../../../shared/service/api.service';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { Subscription, map, catchError, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
    selector: 'app-user-places',
    standalone: true,
    templateUrl: './user-places.component.html',
    styleUrl: './user-places.component.css',
    imports: [PlacesComponent, PlacesContainerComponent],
})
export class UserPlacesComponent {

    destroyRef = inject(DestroyRef);

    private placesService = inject(PlacesService)

    places = inject(PlacesService).loadedUserPlaces;

    ngOnInit(): void {
        this.getPlaces();
    }

    destroy(subscriber: Subscription) {
        this.destroyRef.onDestroy(() => {
            subscriber.unsubscribe();
        });
    }

    getPlaces() {
    }
}
