import { Component, inject, Injector, runInInjectionContext } from '@angular/core';
import { StamService } from './services/stam.service';
import { FunnyComponent } from './components/funny/funny.component';

@Component({
  selector: 'app-root',
  imports: [FunnyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly stam = inject(StamService);
  readonly injector = inject(Injector);

  showFunny = false;

  toggleFunny() {
    this.showFunny = !this.showFunny;
  }


  go() {
    runInInjectionContext(this.injector, () => {
      const s = inject(StamService);
      console.log('my stam service is', s);  
    })
  }

  constructor() {
    console.log('I have a stam service: ', this.stam);
  }
}
