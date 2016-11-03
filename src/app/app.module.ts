import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Channel } from '../pages/channel/channel';
import { Twitch } from '../providers/twitch';
import { Safe } from '../pipes/safe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Channel,
    Safe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Channel,
  ],
  providers: [Twitch]
})
export class AppModule {}
