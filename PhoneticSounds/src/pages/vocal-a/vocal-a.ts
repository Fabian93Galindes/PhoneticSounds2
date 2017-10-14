import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TiposPage } from '../tipos/tipos';

/**
 * Generated class for the VocalAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocal-a',
  templateUrl: 'vocal-a.html',
})
export class VocalAPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalAPage');
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }

}
