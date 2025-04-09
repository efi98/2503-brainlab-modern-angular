import { Component, inject, Signal, signal } from '@angular/core';
import { Color } from './models/color.model';
import { BehaviorSubject, concatAll, distinctUntilChanged, map, merge, mergeAll, Observable, of, shareReplay, switchAll, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly data = inject(DataService);

  readonly search$ = new BehaviorSubject<string>('');

  // readonly results$ = this.search$.pipe(
  //   map(keyword => this.data.searchColors(keyword)),
  //   switchAll()
  // );

  readonly results$ = this.search$.pipe(
    switchMap(keyword => this.data.searchColors(keyword)),
    shareReplay(1)
  );

  readonly true$ = this.search$.pipe(
    map(_ => true)
  );

  readonly false$ = this.results$.pipe(
    map(_ => false)
  );

  readonly isBusy$ = merge(this.true$, this.false$).pipe(
    distinctUntilChanged()
  );

  

}
