import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { TiposPage} from '../tipos/tipos';
import { VocalA3Page } from '../vocal-a3/vocal-a3';
import { Estadistica,EstadisticasServicioProvider} from '../../providers/estadisticas-servicio/estadisticas-servicio';
import { Storage } from '@ionic/storage';
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
  public playError: any;
  public playBien: any;
  public playCelebracion: any;
  public cont : number;
  public listo : boolean;
  
  public punto : boolean;
  public punto1 : boolean;
  public punto2 : boolean;
  public estadis :Estadistica;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public service: EstadisticasServicioProvider,
    public toastCtrl: ToastController
      ) {
    this.cont = 0;
    this.listo = false;
    this.punto = false;
    this.punto1 = false;
    this.punto2 = false;
    this.estadis = new Estadistica();
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
    
    this.playBien.src = "../../assets/song/BIEN01.mp3"; 
    this.playCelebracion.src =  "../../assets/song/CELEBRACION.mp3";
    this.playError.src =  "../../assets/song/ERROR01.mp3";
  }
  goToTipos(){
    this.navCtrl.setRoot(TiposPage);
  }
  goToA3(){
    
    this.estadis.fecha = new Date();
    this.estadis.letra ="A";
    this.estadis.nivel= 2;
    

    this.service.insert(this.estadis)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);
        this.showToast("Partida guardada");
        
      }else{
        console.log(res.success);
        this.showToast("no se guardo la partida");
        
       }
       this.navCtrl.setRoot(VocalA3Page);
    
    });
  }
  error(){
    this.playError.play();
    //this.vibration.vibrate(1000);
    this.punto = false;
    this.punto1 = false;
    this.punto2 = false;
    this.cont = 0;
    console.log("puntos");
  }
  bien(){
    if(this.cont<2){
      this.playBien.play();
      //this.vibration.vibrate(500);
      this.punto = true;
      this.cont = this.cont + 1;
    }else{
      this.playCelebracion.play();
      //this.vibration.vibrate([500,250,500,250,500]);
      this.punto = true;
      this.listo= !this.listo;
    }
  }
  bien1(){
    if(this.cont<2){
      this.playBien.play();
      //this.vibration.vibrate(500);
      this.punto1 = true;
      this.cont = this.cont + 1;
    }else{
      this.playCelebracion.play();
      //this.vibration.vibrate([500,250,500,250,500]);
      this.punto1 = true;
      this.listo= !this.listo;
    }
  }
  bien2(){
    if(this.cont<2){
      this.playBien.play();
      //this.vibration.vibrate(500);
      
      this.punto2 = true;
      this.cont = this.cont + 1;
      console.log("puntos" + this.cont);
    }else{
      this.playCelebracion.play();
      //this.vibration.vibrate([500,250,500,250,500]);
      this.punto2 = true;
      this.listo= !this.listo;
    }
  }

  showToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();  
  }



}
