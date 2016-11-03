import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Channel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html'
})
export class Channel {
  data:any;
  constructor(public navCtrl: NavController, private params: NavParams) {
    this.data = params.data.DataChannel;
  }

  ionViewDidLoad() {
    console.log('Hello Channel Page');
  }

}
