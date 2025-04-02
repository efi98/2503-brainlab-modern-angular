import { effect } from "@angular/core";
import { getState, patchState, signalStoreFeature, withHooks } from "@ngrx/signals";

export function withLocalStorage(key: string) {
    return signalStoreFeature(
        withHooks(store => ({
            onInit: () => {
                effect(() => {
                    const state = getState(store);
                    localStorage.setItem(key, JSON.stringify(state))
                });
    
                const stateText = localStorage.getItem(key);
                if (stateText !== null) {
                    const st = JSON.parse(stateText);
                    patchState(store, st);
                }
            }                
        }))
    );
}