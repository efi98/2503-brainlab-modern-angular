import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { computed } from '@angular/core';

export const AppStore = signalStore(
    withState(initialAppSlice), 
    withComputed(store => ({
        sum: computed(() => store.x() + store.y()), 
        diff: computed(() => store.x() - store.y())
    })), 
    withMethods(store => ({
        incX: () => {
            patchState(store, state => ({x: state.x + 1}))
        }, 
        incY: (delta: number) => {
            patchState(store, state => ({y: state.y +delta}))
        }
    }))
);

