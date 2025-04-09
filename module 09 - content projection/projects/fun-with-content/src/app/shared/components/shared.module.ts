import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./expander/expander.component";
import { ExpanderToggleDirective } from "./expander/expander-toggle.directive";

const exportables = [
    ExpanderComponent, 
    ExpanderToggleDirective
]

@NgModule({
    declarations: [...exportables], 
    exports: [...exportables],

})
export class SharedModule {

}