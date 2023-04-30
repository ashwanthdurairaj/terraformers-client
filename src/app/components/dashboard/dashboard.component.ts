import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dat: any;
  constructor(private authService: AuthServiceService){

  }
  ngOnInit(){
    this.authService.getAppointment().subscribe(data => {
      this.dat = data
      console.log(this.dat)
    })
  }


}
