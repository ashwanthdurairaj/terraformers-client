import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class ValidateServiceService {

  constructor() { }
  
  validateRegister(user)
  {
    if(user.username == undefined || user.email == undefined || user.password1 == undefined || user.password2 == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateConfirmPassword(user)
  {
    if(user.password1 == user.password2)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  validateLogin(user)
  {
    if(user.email == undefined || user.password == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }


  validateEmail(email)
  {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);    
  }

  validatePassword(password)
  {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  }

  validateProfile(data)
  {
    if(data.name === "" || data.email === "" || data.password === "" || data.startTime === "" || data.endTime === "")
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateAppointment(data)
  {
    if(data.title === undefined || data.agenda === undefined || data.startTime === undefined || data.endTime === undefined || data.guest === undefined)
    {
      return false
    }
    else
    {
      return true
    }
  }

}

 