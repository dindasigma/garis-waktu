import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

import { HttpClientModule } from '@angular/common/http';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GoogleSheetsDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
