import { Component, DestroyRef, inject, input, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../../../shared/service/error.service';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { PlacesComponent } from '../places.component';

@Component({
    selector: 'app-user-places',
    standalone: true,
    templateUrl: './user-places.component.html',
    styleUrl: './user-places.component.css',
    imports: [PlacesComponent, PlacesContainerComponent],
})
export class UserPlacesComponent {

    private placesService = inject(PlacesService);
    private errorService = inject(ErrorService);

    title = input.required<string>();

    destroyRef = inject(DestroyRef);

    isLoading = signal(false);

    places = this.placesService.loadedUserPlaces;

    ngOnInit(): void {
        this.getPlaces();
    }

    destroy(subscriber: Subscription) {
        this.destroyRef.onDestroy(() => {
            subscriber.unsubscribe();
        });
    }

    getPlaces() {
        let subs = this.placesService.loadUserPlaces().subscribe({
            next: (value: Place[]) => {
            }, error: (error: string) => {
            }, complete: () => {
            }
        });

        this.destroy(subs);
    }

    onDeletePlace(place: Place | any) {
        console.log('deleteing');
        
        let subs = this.placesService.removeUserPlace(place).subscribe();
        this.destroy(subs);
    }
}
