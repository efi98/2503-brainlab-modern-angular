import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { computed, effect } from '@angular/core';
import { incrementX, incrementYBy, normalize } from './app.updaters';
import { withLocalStorage } from '../custom-features/with-local-storage.feature';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

export const AppStore = signalStore(
    withState(initialAppSlice), 
    withComputed(store => ({
        sum: computed(() => store.x() + store.y()), 
        diff: computed(() => store.x() - store.y())
    })), 
    withMethods(store => ({
        incX: () => {
            updateState(store, 'increment x', incrementX(), normalize())
        }, 
        incY: (delta: number) => {
            updateState(store, 'increment y', incrementYBy(delta), normalize())
        }
    })),
    withDevtools('xy'),
    withLocalStorage('xy')

    // withHooks(store => ({
    //     onInit: () => {
    //         effect(() => {
    //             const state = getState(store);
    //             localStorage.setItem('xy', JSON.stringify(state))
    //         });

    //         const stateText = localStorage.getItem('xy');
    //         if (stateText !== null) {
    //             const st = JSON.parse(stateText);
    //             patchState(store, st);
    //         }
    //     }
    // }))
);

