import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: any;
  password: any;
  message: any;
  status: any;

  constructor(private authService: AuthServiceService, private router: Router,
    private ValidateService: ValidateServiceService){
    
  }

  onSubmit()
  {
    const user = {
      email: this.email,
      password: this.password,
    }
    if(!this.ValidateService.validateLogin(user))
    {
      console.log('Enter all the fields')
      return false;
    }
    else if(!this.ValidateService.validateEmail(user.email))
    {
      console.log('Enter your email id properly');
      this.message = 'Enter your email id properly'
      this.status = false;
      return false;
    }
    else{
      this.authService.login(user).subscribe(data=>{
console.log("hello", data)        
if(data['message'] == 'Invalid Credentials')
{
  this.status = false
  this.message = data['message']
}
else
{
  this.authService.storeUserData(data['token'], data['user'])
  this.status = true;
  this.message = 'Login Successful';
  this.router.navigate(['/dashboard'])

}

      })
      return true;
    }
    
  }
}
