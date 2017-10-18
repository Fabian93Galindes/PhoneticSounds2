import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TiposPage } from '../tipos/tipos';
import { VocalA4Page } from '../vocal-a4/vocal-a4';

/**
 * Generated class for the VocalA3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocal-a3',
  templateUrl: 'vocal-a3.html',
})
export class VocalA3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalA3Page');
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }
  goToA4(){
    this.navCtrl.setRoot(VocalA4Page);
  }
}
