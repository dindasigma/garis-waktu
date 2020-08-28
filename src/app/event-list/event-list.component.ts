import { Observable } from 'rxjs';

import { Component, OnInit, Input } from '@angular/core';
import { Event } from './event-list.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  @Input() events: Observable<Event[]>;
  ngOnInit() {
  }
}
