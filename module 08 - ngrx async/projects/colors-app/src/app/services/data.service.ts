import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Color } from '../models/color.model';
import { BASE_URL } from '../tokens/base-url.token';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);
  readonly urlBase = inject(BASE_URL);

  searchColors(keyword: string): Observable<Color[]>{ 
    console.log('Starting to search colors...', keyword);

    return this.http.get<Color[]>(`${this.urlBase}/colors?name_like=${keyword}`).pipe(
      tap(res => console.log('Colors found for :', keyword)),
    );
  }

  constructor() { }
}
