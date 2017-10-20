import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EstadisticasDaoProvider } from '../../providers/estadisticas-dao/estadisticas-dao';
import { Estadisticadb } from '../../providers/estadisticas-dao/estadisticadb'; 

import { Estadistica,EstadisticasServicioProvider} from '../../providers/estadisticas-servicio/estadisticas-servicio'; 

/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {
  public estadi : Estadisticadb[] = []; 
  public estadi1: Estadistica;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public dao : EstadisticasDaoProvider,
    public service: EstadisticasServicioProvider,
    public toastCtrl: ToastController
    ) {
      this.estadi1 = new Estadistica();
  }

  ionViewDidEnter() {
    this.storage.get('user').then(val =>{
      this.estadi1.nombre = val;
      this.load();
    });
   

  }
  // load2(){
  //     this.dao.all().then(data =>{
  //       this.estadi = data;
  //     });
  // }
  load(){

    this.service.getByOne(this.estadi1)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);

        this.estadi = res.user;
        this.showToast("Cargando...");
      }else{
        console.log(res.success);
        this.showToast("no se cargo estadisticas");
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
