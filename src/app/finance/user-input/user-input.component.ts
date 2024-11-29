import { Component, signal, output } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { FinanceService } from '../finance.service';
import { ResultFinanceModal } from '../investment.model';

@Component({
    selector: 'app-user-input',
    imports: [FormsModule],
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.scss',
})

export class UserInputComponent {
    initialInvestment = signal(0);
    annualInvestment = signal(0);
    expectedReturn = signal(5);
    duration = signal(10);

    constructor(public financeService: FinanceService) { }

    submitMath(ev: any) {
        this.financeService.initialInvestment = this.initialInvestment();
        this.financeService.annualInvestment = this.annualInvestment();
        this.financeService.expectedReturn = this.expectedReturn();
        this.financeService.duration = this.duration();

        this.financeService.calculate();

        this.initialInvestment.set(0);
        this.annualInvestment.set(0);
        this.expectedReturn.set(5);
        this.duration.set(10);
    }
}