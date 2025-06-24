import {hasFormatter} from '../interfaces/hasFormmater.js'

// classes
export class Invoice implements hasFormatter{
    readonly client: string;
    public details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format(): string {
        return `${this.client} owns $${this.amount} for ${this.details}`;
    }
}