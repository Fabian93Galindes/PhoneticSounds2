import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TiposPage } from '../tipos/tipos';
import { VocalA2Page } from '../vocal-a2/vocal-a2';
import { EstadisticasDaoProvider } from '../../providers/estadisticas-dao/estadisticas-dao'; 
import { Estadisticadb } from '../../providers/estadisticas-dao/estadisticadb';
import { Storage } from '@ionic/storage';
import { Estadistica,EstadisticasServicioProvider} from '../../providers/estadisticas-servicio/estadisticas-servicio';

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

  public playError: any;
  public playBien: any;
  public playCelebracion: any;
  public cont : number;
  public listo : boolean;
  
  public punto : boolean;
  public punto1 : boolean;
  public punto2 : boolean;
  public estadis :Estadisticadb;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dao: EstadisticasDaoProvider,
    public storage: Storage,
    public service: EstadisticasServicioProvider,
    public toastCtrl: ToastController,
    private vibration : Vibration
    ) {
      this.cont = 0;
      this.listo = false;
      this.punto = false;
      this.punto1 = false;
      this.punto2 = false;
      this.estadis = new Estadisticadb();

    }

    ionViewDidLoad() {
      this.storage.get('user').then(val =>{
        this.estadis.nombre = val;
      });
    }

  ngOnInit(){
    this.playBien = new Audio();
    this.playCelebracion= new Audio();
    this.playError= new Audio();
    
    this.playBien.src = "../assets/song/BIEN01.mp3"; 
    this.playCelebracion.src =  "../assets/song/CELEBRACION.mp3";
    this.playError.src =  "../assets/song/ERROR01.mp3";
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }
  error(){
    this.playError.play();
    this.vibration.vibrate(1000);
    this.punto = false;
    this.punto1 = false;
    this.punto2 = false;
    this.cont = 0;
    console.log("puntos");
  }
  bien(){
    if(this.cont<2){
      this.playBien.play();
      this.vibration.vibrate(500);
      this.punto = true;
      this.cont = this.cont + 1;
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto = true;
      this.listo= !this.listo;
    }
  }
  bien1(){
    if(this.cont<2){
      this.playBien.play();
      this.vibration.vibrate(500);
      this.punto1 = true;
      this.cont = this.cont + 1;
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto1 = true;
      this.listo= !this.listo;
    }
  }
  bien2(){
    if(this.cont<2){
      this.playBien.play();
      this.vibration.vibrate(500);
      
      this.punto2 = true;
      this.cont = this.cont + 1;
      console.log("puntos" + this.cont);
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto2 = true;
      this.listo= !this.listo;
    }
  }

  goToA2(){
     
    this.estadis.fecha = new Date();
    this.estadis.letra ="A";
    this.estadis.nivel= 1;
    

    this.service.insert(this.estadis)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);
        this.showToast("Partida guardada");
        this.dao.insert(this.estadis)
        .then(res=> this.navCtrl.setRoot(VocalA2Page));
      }else{
        console.log(res.success);
        this.showToast("no se guardo la partida");
        this.dao.insert(this.estadis)
        .then(res=> this.navCtrl.setRoot(VocalA2Page));
        
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
