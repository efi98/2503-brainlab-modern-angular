import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from "./components/calc/calc.component";
import { GroupComponent } from "./components/group/group.component";
import { PREFIX_TOKEN } from './tokens/prefix.token';
import { AdditionService } from './services/addition.service';

@Component({
  selector: 'app-root',
  imports: [CalcComponent, GroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private myInjector: Injector) {

  }

  trySomething() {
    const injector = Injector.create({
      providers: [
        {provide: PREFIX_TOKEN, useValue: 'Bla Bla Bla'}
      ], 
      parent: this.myInjector
    });

    const prefix = injector.get(PREFIX_TOKEN);
    console.log('We asked for PREFIX_TOKEN and got', prefix);
    const addition = injector.get(AdditionService, undefined, {optional: true});
    console.log('We asked for addition service and got', addition);
  }
}
