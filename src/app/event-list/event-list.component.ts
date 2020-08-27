import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Event, eventAttributesMapping } from './event-list.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {

  events$: Observable<Event[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit() {
    this.events$ = this.googleSheetsDbService.getActive<Event>(
      environment.spreadsheetId, environment.worksheetId, eventAttributesMapping, 'Active');
  }

}
