import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  suggestions: any;
  searchTerm: String;
  title:any;
  agenda: any;
  startTime:any;
  endTime: any;
  guest:any;
  id:String;

  constructor(private authService: AuthServiceService,
    private validateService: ValidateServiceService)
  {

  }

  ngOnInit(){

    this.authService.getTerraformers().subscribe(data => {
      console.log(data);

      this.suggestions = data;
      const user = localStorage.getItem('user');
      let d
      if(user != null)
      {
        d = JSON.parse(user)
      }
      this.id = d['_id']
    })
    
  }

  onSubmit()
  {
   
    const data = {
      title: this.title,
      agenda: this.agenda,
      startTime: this.startTime,
      endTime: this.endTime,
      guest: this.searchTerm,
      id: this.id
    }
    console.log(data)
    if(!this.validateService.validateAppointment(data))
    {
      console.log("Fill all the fields")
    }
    else
    {
      this.authService.appointment(data).subscribe(data => {
        console.log(data)
        if(data['status'] == 'success')
        {
          this.title = ''
          this.agenda = ''
          this.startTime = ''
          this.endTime = ''
          this.searchTerm = ''
        }
      })
    }      }

}
