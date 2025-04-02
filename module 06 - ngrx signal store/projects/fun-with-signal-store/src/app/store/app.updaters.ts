import { PartialStateUpdater } from '@ngrx/signals';
import { AppSlice } from './app.slice';

export function incrementX(): PartialStateUpdater<AppSlice> {
  return (state) => ({ x: state.x + 1 });
}

export function incrementYBy(delta: number): PartialStateUpdater<AppSlice> {
  return (state) => ({ y: state.y + delta });
}

export function normalize(): PartialStateUpdater<AppSlice> {
  return (state) =>
    state.x + state.y <= 10 ? state : { x: 0, y: 0 };
}
