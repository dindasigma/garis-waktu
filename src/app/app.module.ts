import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { StripHtmlPipe } from './app.pipe';

import { EventListComponent } from './event-list/event-list.component';

import { HttpClientModule } from '@angular/common/http';
import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    StripHtmlPipe,
    EventListComponent,
    NotFoundComponent,
    EventDetailComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: 'AIzaSyC7BGIhrC1Kh_jHawMgGxeYMVxLjhNrKYg',
    },
    GoogleSheetsDbService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
