export interface FinanceModel {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}

export interface ResultFinanceModal {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}
