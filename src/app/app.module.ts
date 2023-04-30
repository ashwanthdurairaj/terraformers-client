import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ValidateServiceService } from './services/validate-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    AppointmentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-center',
      preventDuplicates: true,
      toastClass: 'toast',
    }),
  ],
  providers: [ValidateServiceService, AuthServiceService, AuthGuard,
    {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
