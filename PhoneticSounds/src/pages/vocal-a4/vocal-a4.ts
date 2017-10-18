import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TiposPage } from '../tipos/tipos';

/**
 * Generated class for the VocalA4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocal-a4',
  templateUrl: 'vocal-a4.html',
})
export class VocalA4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalA4Page');
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }

}
