import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
