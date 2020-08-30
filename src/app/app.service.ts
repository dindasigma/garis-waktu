import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Event, eventAttributesMapping } from './app.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
    private events: Event[] = [];
    private category = new BehaviorSubject('All');
    selectedCategory = this.category.asObservable();

    constructor(private googleSheetsDbService: GoogleSheetsDbService) {
        this.googleSheetsDbService.get(
            environment.spreadsheetId, environment.worksheetId, eventAttributesMapping)
            .subscribe((event: Event[]) => {
                this.events = event
            });
    }

    getEvents(which: string): Event[] {
        if (which == 'All') {
            which = ''
        }
        return this.events
            .filter(e => e.which.includes(which))
    }

    getEvent(url: string): Event {
        return this.events
            .find(e => e.url == url)
    }

    nextCategory(newCategory: string) {
        this.category.next(newCategory)
    }
}
