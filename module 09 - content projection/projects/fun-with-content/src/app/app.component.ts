import { Component } from '@angular/core';
import { ExpanderComponent } from "./shared/components/expander/expander.component";
import { BlankComponent } from "./components/blank/blank.component";

@Component({
  selector: 'app-root',
  imports: [ExpanderComponent, BlankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
