import { DestroyRef, inject } from "@angular/core";

export function startPinger(destroyRef: DestroyRef = inject(DestroyRef)) {
    const id = setInterval(() => console.log('Ping'), 2000);
    destroyRef.onDestroy(() => clearInterval(id));
}