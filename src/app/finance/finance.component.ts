import { Component, signal } from "@angular/core";

import { HeaderComponent } from "../header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { FormsModule } from '@angular/forms';
import { ResultFinanceModal } from './investment.model';
import { FinanceResultComponent } from './finance-result/finance-result.component';

@Component({
    selector: 'app-finance',
    templateUrl: "finance.component.html",
    styleUrl: "finance.component.scss",
    imports: [HeaderComponent, UserInputComponent, FinanceResultComponent, FormsModule],
})

export class FinanceComponent {
}