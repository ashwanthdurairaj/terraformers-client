import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from 'src/app/services/auth-service.service'
import { ValidateServiceService } from 'src/app/services/validate-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: String;
  email: String;
  password: String;
  startTime: String;
  endTime: String;
  ngOnInit(){
    const user = localStorage.getItem('user')
    if(user != null)
    {
      const d = JSON.parse(user)
      const id = {id: d['_id']}
      console.log(d)
      this.authService.getMe(id).subscribe(data => {
        console.log(data)
        this.name = data['username']
        this.email = data['email']
        this.password = data['password']
        this.startTime = data['startTime']
        this.endTime = data['endTime']
      })
    }

  }

  constructor(private authService: AuthServiceService,
    private validateService: ValidateServiceService){

  }

  onSubmit()
  {

    let id
    const user = localStorage.getItem('user')
    if(user != null)
    {
      const u = JSON.parse(user)
      id = u['_id']
    }
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
      startTime: this.startTime,
      endTime: this.endTime,
      userid: id
    }
    console.log(data)
  //form validation, check if any field is empty
  if(!this.validateService.validateProfile(data))
  {
    console.log('Fill in all the fields')
  }
  else
  {
    this.authService.edit(data).subscribe(dat => {
      console.log(dat)
      console.log("Profile Updation Successful")
    })
  }
  
  }
}
