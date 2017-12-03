import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetupEvent } from '../../models/MeetupEvent';

@Injectable()
export class MeetupApiProvider {
  url: string = 'https://alefesouza.com/github/meetup-api.php?meetup=AngularJS-Sao-Paulo';

  constructor(public http: HttpClient) {
  }

  async getEvents(): Promise<MeetupEvent[]> {
    return await this.http.get(this.url).toPromise() as Promise<MeetupEvent[]>;
  }

}
