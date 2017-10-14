import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstadisticasPage} from '../estadisticas/estadisticas';
import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';

import { Storage} from '@ionic/storage';

/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
  }

  goToEsta() {
    this.navCtrl.push(EstadisticasPage);
  }

  goToRegi() {
    this.navCtrl.push(RegistroPage);
  }

  logout() {
    this.storage.set("logged", false);
    this.navCtrl.setRoot(LoginPage);    
  }

}
