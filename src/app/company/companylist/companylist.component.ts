import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  company:any
  constructor() { }

  ngOnInit(): void {
    this.company=[
      {
        "code":"01",
        "name":"HCL"
      },
      {
        "code":"02",
        "name":"TCS"
      },
      {
        "code":"03",
        "name":"WIPRO"
      }
    
    ];
  }

  
}
