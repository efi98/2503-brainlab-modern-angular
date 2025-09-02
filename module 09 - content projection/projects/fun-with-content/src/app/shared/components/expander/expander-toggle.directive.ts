import { Directive, inject } from "@angular/core";
import { ExpanderComponent } from "./expander.component";

@Directive({
    standalone: false,
    selector: '[expander-toggle]', 
    host: {
        '(click)': 'onClick()'
    }, 
})
export class ExpanderToggleDirective {
    readonly myParentExpander = inject(ExpanderComponent, { optional: true });

    onClick() {
        this.myParentExpander?.toggle();

    }
}