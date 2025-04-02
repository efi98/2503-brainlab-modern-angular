import { Routes } from "@angular/router";
import { Part1Component } from "./part-1/part-1.component";
import { Part2Component } from "./part-2/part-2.component";
import { Part3Component } from "./part-3/part-3.component";
import { MY_NUM } from "../../tokens/my-num.token";

export const BRoutes: Routes = [
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    {path: 'first', component: Part1Component}, 
    {path: 'second', component: Part2Component, providers: [{provide: MY_NUM, useValue: 99}]},
    {path: 'third', component: Part3Component},
]