import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../mod4/auth-service';

export const mod5guardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLogged()) {
    return true;
  } else {
    return new RedirectCommand(
      router.createUrlTree(['/'], {queryParams : {message : "T'as pas le droit !"}})
    )
    // router.navigate(['/'])
    // return  false;
  }


};
