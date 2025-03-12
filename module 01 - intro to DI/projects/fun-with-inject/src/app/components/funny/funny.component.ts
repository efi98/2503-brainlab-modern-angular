import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { startPinger } from '../../utils/pinger';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-funny',
  imports: [RouterModule],
  templateUrl: './funny.component.html',
  styleUrl: './funny.component.scss'
})
export class FunnyComponent {
  // readonly destroy = inject(DestroyRef);
  readonly router = inject(Router);

  readonly int$ = interval(1000).pipe(
    takeUntilDestroyed()
  );



  ngOnInit() {
    // startPinger(this.destroy);
    this.int$.subscribe(v => console.log('interval: ', v));
  }

}
