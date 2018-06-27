import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeServices } from './home.service';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private cameraPreview: CameraPreview, public navCtrl: NavController, public homeServices: HomeServices) {
    //this.verify();
  }

  capture() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    this.cameraPreview.takePicture(cameraPreviewOpts).then((imageData) => {

    }, (err) => {
      alert(err);
    });
  }

  detect() {
    let baseImg: any = 'https://vignette.wikia.nocookie.net/akb48/images/6/65/June_2017_BNK48_Kanteera_Wadcharathadsanakul.jpg/revision/latest?cb=20170606093910';
    this.homeServices.detect(baseImg).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  verify() {
    let faceId1 = 'a7e0bde7-9682-494e-a5ff-0a6715fb716d';
    let faceId2 = '9028bc9b-1a8d-470e-b15e-5b349ec0e86d';
    this.homeServices.verify(faceId1, faceId2).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

}
