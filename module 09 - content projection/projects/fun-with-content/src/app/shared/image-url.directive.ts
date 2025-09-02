import { Directive, input } from "@angular/core";

@Directive({
    standalone: false, 
    selector: 'img', 
    host: {
        '[attr.title]': 'src()'
    }
})
export class ImageUrlDirective {
    readonly src = input<string>();

}