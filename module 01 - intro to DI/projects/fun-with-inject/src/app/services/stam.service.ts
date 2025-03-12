import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StamService {
  init() {
    console.log('initializing stam service')
  }

  constructor() { }
}
