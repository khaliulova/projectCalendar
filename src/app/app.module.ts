import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { MonthService }  from './month.service';
import { AppComponent }  from './app.component';
import { MonthComponent }  from './month.component';
import { CalendarComponent }  from './calendar.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'path/:year/:month',
        component: MonthComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    MonthComponent,
    CalendarComponent
  ],
  providers: [MonthService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
