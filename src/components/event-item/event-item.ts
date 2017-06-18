/**
 * @author Alefe Souza <contact@alefesouza.com>
 */

import { Component, Input } from '@angular/core';
import { MeetupEvent } from "../../models/meetup-event";

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
