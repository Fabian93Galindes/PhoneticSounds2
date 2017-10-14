import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ConfigurationPage } from '../configuration/configuration';
import { VocalesPage } from '../vocales/vocales';
/**
 * Generated class for the TiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tipos',
  templateUrl: 'tipos.html',
})
export class TiposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposPage');
  }
  goToConf(){
    this.navCtrl.push(ConfigurationPage);
  }
  goToVocal(){
    this.navCtrl.push(VocalesPage);
  }
}
