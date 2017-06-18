/**
 * @author Alefe Souza <contact@alefesouza.com>
 */

import { Component, AfterViewInit } from '@angular/core';
import { NavController, AlertController, Platform, LoadingController } from 'ionic-angular';
import { MeetupEvent } from "../../models/meetup-event";
import { MeetupAPIService } from "../../services/meetup-api.service";
import { DetailsPage } from "../details/details";

var isElectron: boolean = typeof window['process'] != 'undefined' && typeof window['process']['type'] != 'undefined';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  items: MeetupEvent[] = [];

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private meetupAPIService: MeetupAPIService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  async getEvents() {
    let loader = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loader.present();

    try {
      let meetupEvents = await this.meetupAPIService.getEvents();

      if (meetupEvents !== null) {
        meetupEvents.forEach(me => {
          me.image = this.getImage(me.description);
        });

        this.items = meetupEvents;
      } else {
        this.retry();
      }
    } catch (e) {
      this.retry();
    }

    loader.dismiss();

    if (this.platform.is('cordova')) {
      console.log('Estou no cordova');
    } else if (isElectron) {
      console.log('Estou no electron');
    } else {
      console.log('Estou no navegador');
    }
  }

  retry() {
    let confirm = this.alertCtrl.create({
      title: 'Houve um erro ao receber os eventos',
      message: 'Deseja tentar novamente?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this.platform.exitApp();
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.getEvents();
          }
        }
      ]
    });

    confirm.present();
  }

  getImage(html: string): string {
    let m;
    let regex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

    if (m = regex.exec(html)) {
      return m[1];
    } else {
      return '../../assets/icon/icon.png';
    }
  }

  openEvent(meetupEvent: MeetupEvent): void {
    this.navCtrl.push(DetailsPage, {
      'event': meetupEvent
    });
  }
  ngAfterViewInit(): void {
    this.getEvents();
  }
}
