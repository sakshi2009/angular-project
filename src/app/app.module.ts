import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GuestLoginComponent } from './guest-login/guest-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuestMenuComponent } from './guest-menu/guest-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path:'',component:LoginComponent},
    {path:'guestlogin',component:GuestLoginComponent},
    {path:'adminlogin',component:AdminLoginComponent},
    {path:'guestmenu', component:GuestMenuComponent},
    {path:'adminmenu', component:AdminMenuComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent,GuestLoginComponent,AdminLoginComponent ,LoginComponent, GuestMenuComponent, AdminMenuComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
