import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Twitch } from '../../providers/twitch';
import { Channel } from '../../pages/channel/channel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datas: any = [];
  pagination: number = 0;
  constructor(public navCtrl: NavController, private twitch: Twitch) {
    twitch.streams(this.pagination).then(data => {
      this.datas = data.streams;
    });
  }

  openChannel(DataChannel){
    this.navCtrl.push(Channel, {
      DataChannel: DataChannel
    });
  }

  infiniteScroll(ev){
    this.pagination =+ 25;
    this.twitch.streams(this.pagination).then(data => {
      for(let i of data.streams){
        this.datas.push(i);
      }
      ev.complete();
    });
  };

  doRefresh(ev){
    this.pagination = 0;
    this.twitch.streams(this.pagination).then(data => {
      ev.complete();
      this.datas = data.streams;
    })
  }

}
