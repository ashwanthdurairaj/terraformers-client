import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ValidateServiceService } from 'src/app/services/validate-service.service';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email: String;
  password1: String;
  password2: String;
  status: boolean;
  message: String;

  ngOnInit(): void {
      
  }
  constructor(private authService: AuthServiceService,
    private validateService: ValidateServiceService,
    private router: Router,
    private toastr: ToastrService) {

  }

  onSubmit()
  {
    const user = {
      username: this.username,
      email: this.email,
      password1: this.password1,
      password2: this.password2
    }
    if(!this.validateService.validateRegister(user))
    {
      console.log('Please fill in all fields')
      this.status = false;
      this.message = 'Please fill in all fields'
      this.toastr.error('Please fill in all fields');
      return false;
    }
    else if(!this.validateService.validateEmail(user.email))
    {
      console.log('Enter the email id properly')
      this.status = false;
      this.message = 'Enter the email id properly';
      this.toastr.error('Enter the email id properly');
      return false;
    }
    else if(!this.validateService.validateConfirmPassword(user))
    {
      this.status = false;
      console.log('Password and confirm password fields are not the same')
      this.message = 'Password and confirm password fields are not the same';
      this.toastr.error('Password and confirm password fields are not the same')
      return false;
    }
    // else if(!this.validateService.validatePassword(user.password1))
    // {
    //   console.log('Enter the password properly')
    //   console.log(user.password1)
    //   this.status = false;
    //   this.message = 'Enter the password properly';
    //   return false;
    // }
    else{
      this.authService.register(user).subscribe(data => {
        // console.log(data['message'])
        if(data['status'] === 'success')
        {
          this.status = true;
          this.message = 'Registration Successfully'
          this.username = ''
          this.email = ''
          this.password1 = ''
          this.password2 = ''
        }
        else{
          this.status = false;
          this.message = 'User already exists, enter different email address'
        }
      })
      // this.toastr.success('Registration Successful')
      // this.router.navigate(['/']);
      return true;
    }
    //write the code for form validation her
}
}