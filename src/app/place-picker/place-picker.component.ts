import { Component } from '@angular/core';

import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { UserPlacesComponent } from './places/user-places/user-places.component';

@Component({
    selector: 'app-place-picker',
    standalone: true,
    templateUrl: './place-picker.component.html',
    styleUrl: './place-picker.component.scss',
    imports: [AvailablePlacesComponent, UserPlacesComponent],
})
export class PlacePickerComponent { }
