import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { DbusuarioProvider, Usuariodb} from '../../providers/dbusuario/dbusuario';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  
  usuario: Usuariodb;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public service: DbusuarioProvider,public toastCtrl: ToastController ) {
        this.usuario= new Usuariodb();
  }

  singin() {
    this.service.singin(this.usuario)
    .subscribe(res=>{
      if(res.success){
        this.showToast("Usuario agregado");
        this.navCtrl.pop();
      }else{
        this.showToast("Usuario ya existe");
      }

    });
  }

  showToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();  
  }


}
