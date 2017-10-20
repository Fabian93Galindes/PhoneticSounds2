import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { TiposPage } from '../tipos/tipos';
import { Estadistica,EstadisticasServicioProvider} from '../../providers/estadisticas-servicio/estadisticas-servicio';
import { Storage } from '@ionic/storage';
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

  public estadis :Estadistica;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public storage: Storage,
      public service: EstadisticasServicioProvider,
      public toastCtrl: ToastController
        ) {
          this.estadis = new Estadistica();
  }

  ionViewDidLoad() {
    this.storage.get('user').then(val =>{
      this.estadis.nombre = val;
    });
  }
  goToTipos(){
    
    this.estadis.fecha = new Date();
    this.estadis.letra ="A";
    this.estadis.nivel= 4;
    

    this.service.insert(this.estadis)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);
        this.showToast("Partida guardada");
        
      }else{
        console.log(res.success);
        this.showToast("no se guardo la partida");
        
       }
       this.navCtrl.setRoot(TiposPage);
    
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
