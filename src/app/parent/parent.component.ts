import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(CounterComponent)
  cc: CounterComponent = new CounterComponent;
  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.cc.increasebyone();
  }

  decrease(){
    this.cc.decreasebyone();
  }
}
