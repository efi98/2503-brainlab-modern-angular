import { Routes } from '@angular/router';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageCComponent } from './pages/page-c/page-c.component';
import { MY_NUM } from './tokens/my-num.token';
import { Part1Component } from './pages/page-b/part-1/part-1.component';
import { Part2Component } from './pages/page-b/part-2/part-2.component';
import { Part3Component } from './pages/page-b/part-3/part-3.component';
import { stamGuard } from './guards/stam.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'a', pathMatch: 'full'},
    {path: 'a', loadComponent: () => import('./pages/page-a/page-a.component'), 
        providers: [
            {provide: MY_NUM, useValue: 42}
        ], canActivate: [stamGuard]
    },
    {path: 'aa', loadComponent: () => import('./pages/page-a/page-a.component'),
        providers: [
            {provide: MY_NUM, useValue: 55}
        ]
    },
    {path: 'b', component: PageBComponent, 
        providers: [
            {provide: MY_NUM, useValue: 100}
        ],
        loadChildren: () => import('./pages/page-b/b.routes').then(m => m.BRoutes)
    }, 
    {path: 'c/:id', component: PageCComponent}, 

];
