import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService: AuthServiceService,
    private router: Router,)
  {}

  Logout()
  {
    this.authService.logout()
    this.router.navigate([''])
  }

}
