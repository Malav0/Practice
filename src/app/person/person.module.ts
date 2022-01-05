import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';


@NgModule({
  declarations: [
    PersonListComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { 
  constructor(){

    console.log("person module loaded");
  }
}
