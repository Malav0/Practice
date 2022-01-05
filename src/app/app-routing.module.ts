import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import {PreloadAllModules} from '@angular/router'

const routes: Routes = [
  {
    path:'company',
    loadChildren:()=> import("./company/company.module").then(x=>x.CompanyModule) 
  },
  {
    path:'person',
    loadChildren:()=> import("./person/person.module").then(y=>y.PersonModule) 
  },
  {
    path:'contactus',
    component:CounterComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy:PreloadAllModules
      }),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
