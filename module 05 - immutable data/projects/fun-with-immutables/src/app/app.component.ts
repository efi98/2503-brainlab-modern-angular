import { Component, effect, signal } from '@angular/core';
import { Person } from './models/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly a = signal(['a', 'b', 'c']);

  pushItemToArray() {
    this.a.update(val => [...val, 'd']);
  }

  shiftItemToArray() {
    this.a.update(val => [' ', ...val]);
  }



  readonly r = signal<Record<string, number>>({
    x: 10, 
    y: 12, 
    z: 42
  });

  readonly r2 = signal<Record<string, number>>({
    a: 1, 
    b: 2, 
    c: 3
  })

  addKey() {
    this.r.update(val => ({
      ...val, 
      w: 50
    }))
  }

  merge() {
    this.r.update(val => ({
      ...val, 
      ...this.r2()
    }))
  }

  removeKey() {
    this.r.update(val => Object.fromEntries(Object.entries(val).filter(pair => pair[0] !== 'x')));
  }


  readonly p = signal<Person>({
    name: 'John Smith', 
    age: 42, 
    address: {
      city: 'Haifa', 
      state: 'Israel'
    }
  });

  changeName() {
    this.p.update(val => ({
      ...val,
      name: 'Marco Polo', 
    }));
  }

  changeCity() {
    this.p.update(val => ({
      ...val, 
      address: {
        ...val.address, 
        city: 'Tel Aviv'
      }
    }))
  }

  constructor() {
    effect(() => {
      console.log(JSON.stringify(this.p()));
    })
  }
}
