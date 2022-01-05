import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ParentComponent } from './parent/parent.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ParentColorComponent } from './parent-color/parent-color.component';
import { CookieComponent } from './cookie/cookie.component';
import { CookieService } from 'ngx-cookie-service';
// import { PersonModule } from './person/person.module';
// import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ParentComponent,
    ChangecolorDirective,
    ParentColorComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PersonModule,
    // CompanyModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

    console.log("App module loaded");
  }
 }
