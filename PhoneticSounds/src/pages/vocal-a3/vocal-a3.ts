import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TiposPage } from '../tipos/tipos';
import { VocalA4Page } from '../vocal-a4/vocal-a4';

/**
 * Generated class for the VocalA3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocal-a3',
  templateUrl: 'vocal-a3.html',
})
export class VocalA3Page {

  public playError: any;
  public playBien: any;
  public playCelebracion: any;
  public cont : number;
  public listo : boolean;
  
  public punto : boolean;
  public punto1 : boolean;
  public punto2 : boolean;
  public punto3 : boolean;
  //private vibration : Vibration

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cont = 0;
    this.listo = false;
    this.punto = false;
    this.punto1 = false;
    this.punto2 = false;
    this.punto3 = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalA3Page');
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
  goToA4(){
    this.navCtrl.setRoot(VocalA4Page);
  }
  error(){
    this.playError.play();
    //this.vibration.vibrate(1000);
    this.punto = false;
    this.punto1 = false;
    this.punto2 = false;
    this.punto3 = false;
    this.cont = 0;
    console.log("puntos");
  }
  bien(){
    if(this.cont<3){
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
    if(this.cont<3){
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
    if(this.cont<3){
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
  bien3(){
    if(this.cont<3){
      this.playBien.play();
      //this.vibration.vibrate(500);
      
      this.punto3 = true;
      this.cont = this.cont + 1;
      console.log("puntos" + this.cont);
    }else{
      this.playCelebracion.play();
      //this.vibration.vibrate([500,250,500,250,500]);
      this.punto3 = true;
      this.listo= !this.listo;
    }
  }
}
