import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InitService {
    async init() {
        console.log('started init');
        await new Promise(res => setTimeout(res, 3000));
        console.log('Phase 2 of init');
        await new Promise(res => setTimeout(res, 3000));
        console.log('init completed');
    }
}