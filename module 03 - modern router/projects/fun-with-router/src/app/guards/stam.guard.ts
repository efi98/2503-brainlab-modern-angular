import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export const stamGuard: CanActivateFn = (route, state) => {
  return true;
};
