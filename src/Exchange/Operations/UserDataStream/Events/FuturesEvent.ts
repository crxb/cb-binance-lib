export class FuturesEvent {
    transactionTime: number;
    eventTime: number;
    eventType: string;

    constructor(data: any) {
        this.eventType = data.e;
        this.eventTime = data.E;
        this.transactionTime = data.T;
    }
}
