import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeServices } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public homeServices: HomeServices) {
    this.verify();
  }

  detect() {
    let baseImg: any = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/RH_Louise_Lillian_Gish.jpg';
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
