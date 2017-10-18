import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TiposPage } from '../tipos/tipos';
import { VocalA2Page } from '../vocal-a2/vocal-a2';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private vibration : Vibration) {
      this.cont = 0;
      this.listo = false;
      this.punto = false;
      this.punto1 = false;
      this.punto2 = false;

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocalAPage');
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
  }
  bien(){
    if(this.cont<3){
      this.playBien.play();
      this.vibration.vibrate(500);
      this.punto = true;
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto = true;
      this.listo= !this.listo;
    }
  }
  bien1(){
    if(this.cont<3){
      this.playBien.play();
      this.vibration.vibrate(500);
      this.punto1 = true;
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto1 = true;
      this.listo= !this.listo;
    }
  }
  bien2(){
    if(this.cont<3){
      this.playBien.play();
      this.vibration.vibrate(500);
      this.punto2 = true;
    }else{
      this.playCelebracion.play();
      this.vibration.vibrate([500,250,500,250,500]);
      this.punto2 = true;
      this.listo= !this.listo;
    }
  }

  goToA2(){
    this.navCtrl.setRoot(VocalA2Page);
  }
}
