import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message:string=''
  count:number=0
  constructor() { }

  ngOnInit(): void {
  }
  increasebyone(){
    this.count=this.count+1;
    this.message="counter:"+ this.count;
  }

  decreasebyone(){
    this.count=this.count-1;
    this.message="counter:"+ this.count;
  }
  
}
