import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-c',
  imports: [],
  templateUrl: './page-c.component.html',
  styleUrl: './page-c.component.scss'
})
export class PageCComponent {
  @Input() id!: number;

  // readonly route = inject(ActivatedRoute);

  // id$ = this.route.params.pipe(
  //   map(p => Number(p['id']))
  // );

}
