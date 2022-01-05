import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';

const routes: Routes = [
  {
    path:'',
    component:PersonComponent,
    children:[
      {
        path:'person-list',
        component:PersonListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
