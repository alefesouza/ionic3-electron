/**
 * @author Alefe Souza <contact@alefesouza.com>
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MeetupEvent } from "../../models/meetup-event";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {
  meetupEvent: MeetupEvent;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.meetupEvent = navParams.get('event');
  }
}
