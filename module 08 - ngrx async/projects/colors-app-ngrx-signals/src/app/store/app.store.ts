import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialAppSlice } from './app.slice';
import { inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { setBusy, setIdle, setResults } from './app.updaters';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, map, switchAll, switchMap, tap } from 'rxjs';

export const AppStore = signalStore(
    {providedIn: 'root'}, 
    withState(initialAppSlice), 
    withProps(_ => ({
        _dataService: inject(DataService)
    })), 
    withMethods(store => ({
        searchColors: rxMethod<string>(trigger$ => trigger$.pipe(
            tap(_ => patchState(store, setBusy())),
            switchMap(keyword => store._dataService.searchColors(keyword)),
            tap(res => patchState(store, setResults(res), setIdle())),
        ))
    })), 
    withHooks(store => ({
        onInit() {
            store.searchColors('');
        }
    }))
);