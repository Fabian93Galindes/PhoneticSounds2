import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TiposPage} from'../tipos/tipos';
import { VocalAPage } from '../vocal-a/vocal-a';

/**
 * Generated class for the VocalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocales',
  templateUrl: 'vocales.html',
})
export class VocalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalesPage');
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }
  goToA(){
    this.navCtrl.setRoot(VocalAPage);
  }

}
