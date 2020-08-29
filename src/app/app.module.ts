import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';

import { HttpClientModule } from '@angular/common/http';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GoogleSheetsDbService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
