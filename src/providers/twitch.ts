import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Twitch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Twitch {
  client_id:any = '&client_id=egmuq8iqm9qoztdiq0npxazfm5hdthp';
  constructor(public http: Http) {
    console.log('Hello Twitch Provider');
  }

  streams(pagination){
    return this.http.get('https://api.twitch.tv/kraken/streams?offset='+pagination+this.client_id)
    .toPromise()
    .then(data => data.json());
  }

}
