import { Component, Input } from '@angular/core';
import { MeetupEvent } from '../../models/MeetupEvent';

@Component({
  selector: 'event-item',
  templateUrl: 'event-item.html'
})
export class EventItemComponent {
  @Input()
  meetupEvent: MeetupEvent;

  constructor() {
  }

}
