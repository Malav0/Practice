import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {
 userid:any
 cookies:any
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }
  click(){

    this.cookie.set("userid","Malav")
    this.cookie.set("email","abc@gmail.com")
    this.cookies=this.cookie.getAll()
    console.log(this.cookies)

  }
  
}