import { Component } from '@angular/core';
import { MyLinkDirective } from './directives/my-link.directive';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyLinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fun-with-router';
}
