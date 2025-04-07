import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  createObserver(id: string): Observer<number> {
    return {
      next: (value: number) => console.log(`Observer id ${id} next ${value}`), 
      complete: () => console.log(`Observer id ${id} complete`), 
      error: (e) => console.log(`Observer id ${id} error ${e}`)
    }    
  }

  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(0);
      setTimeout(() => observer.next(42), 3000)
      setTimeout(() => observer.next(100), 5000)
      setTimeout(() => observer.next(200), 7000)
      setTimeout(() => observer.next(300), 8000)
      setTimeout(() => observer.complete(), 10000)
      setTimeout(() => observer.next(400), 12000)
    });
  }

  createSubjectObservable(): Observable<number> {
    const subj = new Subject<number>();

    subj.next(0);
    setTimeout(() => subj.next(42), 1000)
    setTimeout(() => subj.next(100), 2000)
    setTimeout(() => subj.next(200), 4000)
    setTimeout(() => subj.next(300), 7000)
    setTimeout(() => subj.complete(), 10000)
    setTimeout(() => subj.next(400), 12000)

    return subj;    
  }

  createBehaviorSubjectObservable(): Observable<number> {
    const subj = new BehaviorSubject<number>(0);
    setTimeout(() => subj.next(42), 1000)
    setTimeout(() => subj.next(100), 2000)
    setTimeout(() => subj.next(200), 4000)
    setTimeout(() => subj.next(300), 7000)
    setTimeout(() => subj.complete(), 10000)
    setTimeout(() => subj.next(400), 12000)

    return subj;    
  }

  createReplaySubjectObservable(): Observable<number> {
    const subj = new ReplaySubject<number>(2);
    subj.next(0);
    setTimeout(() => subj.next(42), 1000)
    setTimeout(() => subj.next(100), 2000)
    setTimeout(() => subj.next(200), 4000)
    setTimeout(() => subj.next(300), 7000)
    setTimeout(() => subj.complete(), 10000)
    setTimeout(() => subj.next(400), 12000)

    return subj;    
  }


  go() {
    const observerA = this.createObserver('A');
    const observerB = this.createObserver('B');
    const observerC = this.createObserver('C');

    const observable = this.createReplaySubjectObservable();

    observable.subscribe(observerA);

    setTimeout(() => {
      observable.subscribe(observerB);
    }, 2500);

    setTimeout(() => {
      observable.subscribe(observerC);
    }, 11000);





  }
}
