import { Injectable, signal } from '@angular/core';
import { FinanceModel, ResultFinanceModal } from './investment.model';

@Injectable({
    providedIn: 'platform'
})
export class FinanceService {
    resultData = signal<Array<ResultFinanceModal> | undefined>(undefined);

    initialInvestment!: number;
    duration!: number;
    expectedReturn!: number;
    annualInvestment!: number;

    constructor() {
    }

    calculate() {
        const annualData: ResultFinanceModal[] = [];
        let investmentValue = this.initialInvestment;

        for (let i = 0; i < this.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
            investmentValue += interestEarnedInYear + this.annualInvestment;
            const totalInterest = investmentValue - this.annualInvestment * year - this.initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: this.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
            });
        }
        this.resultData.set(annualData);
    }
}