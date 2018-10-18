import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { PushNotificationProvider } from '../providers/push-notification/push-notification';

import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    pnp: PushNotificationProvider,
    toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      // Get a FCM token
      pnp.getToken();
      

      // Listen to incoming messages
      pnp.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
        .subscribe()

    });
  }
}
