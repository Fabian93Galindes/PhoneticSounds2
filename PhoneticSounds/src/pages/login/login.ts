import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { DbusuarioProvider, Usuariodb } from '../../providers/dbusuario/dbusuario';
import { RegistroPage } from '../registro/registro';
import { TiposPage } from '../tipos/tipos';
import { Storage} from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario : Usuariodb;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: DbusuarioProvider, public toastCtrl: ToastController,
    public storage: Storage ) {
      this.usuario= new Usuariodb();
  }

  login(){
    this.service.login(this.usuario)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);
        this.usuario = res.user;
        this.showToast("Cargando...");
        this.storage.set('user',this.usuario.nombre);
        this.storage.set("logged", true);
        this.navCtrl.setRoot(TiposPage);
      }else{
        console.log(res.success);
        this.showToast("Usuario o contraseña erronea");
      }

    });
    
  }
  goToRegistro(){
    this.navCtrl.push(RegistroPage);
  }

  showToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();  
  }



}
