import { NgModule } from "@angular/core";
import { ExpanderComponent } from "./components/expander/expander.component";
import { ExpanderToggleDirective } from "./components/expander/expander-toggle.directive";
import { ImageUrlDirective } from "./image-url.directive";
import { ExpanderToggleComponent } from "./components/expander/expander-toggle/expander-toggle.component";

const exportables = [
    ExpanderComponent, 
    ExpanderToggleDirective, 
    ImageUrlDirective, 
    ExpanderToggleComponent
]

@NgModule({
    declarations: [...exportables], 
    exports: [...exportables],

})
export class SharedModule {

}