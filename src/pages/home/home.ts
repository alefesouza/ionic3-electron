import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeetupApiProvider } from '../../providers/meetup-api/meetup-api';
import { MeetupEvent } from '../../models/MeetupEvent';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meetupEvents: MeetupEvent[] = [];

  constructor(public navCtrl: NavController, public meetupApiProvider: MeetupApiProvider) {

  }

  async ionViewDidLoad() {
    this.meetupEvents = await this.meetupApiProvider.getEvents();
  }

  openEvent(meetupEvent: MeetupEvent): void {
    this.navCtrl.push(DetailsPage, {
      'meetupEvent': meetupEvent
    });
  }
}
