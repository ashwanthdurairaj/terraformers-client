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
export class AuthServiceService {

  authToken: any;
  user: any;
  constructor(private http: HttpClient) { }

  register(user)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    console.log(user)
    return this.http.post('https://terraformers-api.vercel.app/users/register', user, {headers: headers}).pipe(map(res => res));
  }

  login(user)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    console.log(user)
    return this.http.post('https://terraformers-api.vercel.app/users/login', user, {headers: headers}).pipe(map(res => res)); 
  }

  getToken()
  {
    return localStorage.getItem('id_token')
  }

  storeUserData(token, user)
  {
    console.log(token, user)
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  logout()
  {
    this.authToken = null
    this.user = null
    localStorage.clear()
  }

  appointment(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    return this.http.post('https://terraformers-api.vercel.app/users/appointment', data, {headers: headers}).pipe(map(res => res));     
  }

  getTerraformers()
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    return this.http.get('https://terraformers-api.vercel.app/users/data',{headers: headers}).pipe(map(res => res));     
    
  }

  getMe(id)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    return this.http.post('https://terraformers-api.vercel.app/users/me',id,{headers: headers}).pipe(map(res => res));     
  }
  
  edit(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    console.log(data)
    return this.http.post('https://terraformers-api.vercel.app/users/edit',data,{headers: headers}).pipe(map(res => res));     

  }

  getAppointment()
  {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application-json');
    return this.http.get('https://terraformers-api.vercel.app/users/getApp',{headers: headers}).pipe(map(res => res));     
  }
}
