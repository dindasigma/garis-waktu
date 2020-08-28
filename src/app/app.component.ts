import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Event, eventAttributesMapping } from './event-list/event-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  events$: Observable<Event[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.getEvents('all')
  }

  getEvents(which: string) {
    if (which == 'all') {
      this.events$ = this.googleSheetsDbService.get<Event>(
        environment.spreadsheetId, environment.worksheetId, eventAttributesMapping);
    } else {
      this.events$ = this.googleSheetsDbService.getActive<Event>(
        environment.spreadsheetId, environment.worksheetId, eventAttributesMapping, which);
    }
  }
}
