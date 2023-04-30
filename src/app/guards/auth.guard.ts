import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthServiceService)
  {}

  canActivate()
  {
    if(this.authService.getToken())
    {
      console.log(this.authService.getToken())
      return true;
    }
    else
    {
      console.log(this.authService.getToken())
      this.router.navigate(['/'])
      return false;
    }
  }
}
