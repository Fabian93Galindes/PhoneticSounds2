import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TiposPage} from '../tipos/tipos';
import { VocalA3Page } from '../vocal-a3/vocal-a3';

/**
 * Generated class for the VocalA2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocal-a2',
  templateUrl: 'vocal-a2.html',
})
export class VocalA2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalA2Page');
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }
  goToA3(){
    this.navCtrl.setRoot(VocalA3Page);
  }

}
