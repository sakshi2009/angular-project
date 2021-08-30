import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.component.html',
  styleUrls: ['./guest-login.component.css']
})
export class GuestLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['/guestmenu'])}
}