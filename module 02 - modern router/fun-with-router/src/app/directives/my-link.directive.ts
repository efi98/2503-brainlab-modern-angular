import { Directive, inject, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MY_LINK_CLASS } from "./my-link-class.token";

@Directive({
    selector: '[myLink]', 
    hostDirectives: [
        RouterLinkActive,
        {
            directive: RouterLink, 
            inputs: ['routerLink: myLink']
        }
    ]
})
export class MyLinkDirective {
    @Input()
    myLink: string = '';

    readonly className = inject(MY_LINK_CLASS, {optional: true});

    constructor(private rla: RouterLinkActive) {
        rla.routerLinkActive = this.className ?? 'po';
    }

}