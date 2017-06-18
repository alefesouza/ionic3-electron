/**
 * @author Alefe Souza <contact@alefesouza.com>
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MeetupEvent } from "../models/meetup-event";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MeetupAPIService {
    url: string = 'https://alefesouza.com/github/meetup-angular.php?meetup=AngularJS-Sao-Paulo';

    constructor(private http: Http) { }

    async getEvents(): Promise<MeetupEvent[]> {
        try {
            let response = await this.http.get(this.url)
                .toPromise();

            return response.json() as MeetupEvent[];
        } catch (e) {
            return null;
        }
    }
}