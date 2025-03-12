import { Inject, Injectable, Optional } from "@angular/core";
import { PREFIX_TOKEN } from "../tokens/prefix.token";

@Injectable({
    providedIn:'root'
})
export class HistoryService {
    readonly id = Math.ceil(Math.random() * 1000000);
    readonly records: string[] = [];

    constructor(@Inject(PREFIX_TOKEN) private prefix: string) {
        console.log('Constructing History service', this.id);
    }

    audit(txt: string) {
        this.records.push(`${this.prefix} > ${txt}`);
        console.table(this.records);
    }

}