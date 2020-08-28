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
  events: Event[];


  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.getEvents('')
  }

  getEvents(which: string) {
    this.googleSheetsDbService.get(
      environment.spreadsheetId, environment.worksheetId, eventAttributesMapping)
      .subscribe((event: Event[]) => {
        this.events = event.filter(e => e.which.includes(which))
      });
  }
}
