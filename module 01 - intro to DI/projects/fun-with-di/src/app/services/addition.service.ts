import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService {
    readonly id = Math.ceil(Math.random() * 1000000);

    constructor(private history: HistoryService) {
        console.log('Constructing Addition Service', this.id);
    }

    add(a: number, b: number): number {
        this.history.audit(`Service ${this.id} Added ${a} and ${b}`)
        return a + b;
    }
}