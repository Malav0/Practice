import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:any
  constructor() { }

  ngOnInit(): void {
    this.persons=[
      {
        "id":"01",
        "name":"Malav"
      },
      {
        "id":"02",
        "name":"Akshit"
      },
      {
        "id":"03",
        "name":"Jay"
      },
    ]
  }

}
