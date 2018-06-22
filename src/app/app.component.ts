import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, cameraPreview: CameraPreview) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'front',
        tapPhoto: false,
        previewDrag: false,
        toBack: true,
        alpha: 1
      };

      cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          
        },
        (err) => {
          alert(err);
        });
    });
  }
}

