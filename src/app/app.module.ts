import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadDesignComponent } from './bad-design/bad-design.component';
import { GoodDesignComponent } from './good-design/good-design.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    BadDesignComponent,
    GoodDesignComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
