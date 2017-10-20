import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { DbusuarioProvider, Usuariodb } from '../../providers/dbusuario/dbusuario';
import { RegistroPage } from '../registro/registro';
import { TiposPage } from '../tipos/tipos';
import { Storage} from '@ionic/storage';
import { Estadisticadb } from '../../providers/estadisticas-dao/estadisticadb';
import { EstadisticasDaoProvider } from '../../providers/estadisticas-dao/estadisticas-dao';
import { Estadistica,EstadisticasServicioProvider} from '../../providers/estadisticas-servicio/estadisticas-servicio'; 

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
  public estadi : Estadistica[] = []; 
  public estadi1: Estadistica;
  usuario : Usuariodb;
  estadb : Estadisticadb;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: DbusuarioProvider, public toastCtrl: ToastController,
    public storage: Storage,
    public dao : EstadisticasDaoProvider,
    public service1: EstadisticasServicioProvider
  
  
    ) {
      this.usuario= new Usuariodb();
      this.estadi1 = new Estadistica();
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
        
        this.estadi1.nombre= this.usuario.nombre;
        this.loadEstadisticas();

        
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

  loadEstadisticas(){
    this.service1.getByOne(this.estadi1)
    .subscribe(res=>{
      if(res.success){
        this.estadi = res.user;
        for (var i = 0; i < this.estadi.length; i++) {
            this.estadb = new Estadisticadb();
            this.estadb.nombre = this.estadi[i].nombre;
            this.estadb.fecha = this.estadi[i].fecha;
            this.estadb.letra = this.estadi[i].letra;
            this.estadb.nivel = this.estadi[i].nivel;
            this.dao.insert(this.estadb);
            this.navCtrl.setRoot(TiposPage);
        }
      }else{
        console.log(res.success);
        this.showToast("no se cargaron estadisticas");
      }

    });
  }


}
