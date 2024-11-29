import { Component, inject, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { FinanceService } from '../finance.service';

@Component({
    selector: 'app-finance-result',
    imports: [CurrencyPipe],
    template: `
        @if (chartDetails()?.length) {
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Intrest (Year)</th>
                        <th>Toatal Intrest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    @for (result of chartDetails(); track $index) {
                        <tr>
                            <td>{{result.year}}</td>
                            <td>{{result.valueEndOfYear | currency:'INR'}}</td>
                            <td>{{result.interest | currency:'INR'}}</td>
                            <td>{{result.totalInterest | currency:'INR'}}</td>
                            <td>{{result.totalAmountInvested | currency:'INR'}}</td>
                        </tr>
                    }
                </tbody>
            </table>
        } @else {
            <h3>Please enter values and press on "CALCULATE" button</h3>
        }
    `,
    styleUrl: './finance-result.component.scss',
})
export class FinanceResultComponent {

    financeService = inject(FinanceService);

    chartDetails = this.financeService.resultData.asReadonly();
}
