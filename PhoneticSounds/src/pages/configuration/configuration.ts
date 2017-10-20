import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EstadisticasPage} from '../estadisticas/estadisticas';
import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';

import { Storage} from '@ionic/storage';
import { EstadisticasDaoProvider } from '../../providers/estadisticas-dao/estadisticas-dao';
import { Estadisticadb } from'../../providers/estadisticas-dao/estadisticadb';
import { Estadistica,EstadisticasServicioProvider } from '../../providers/estadisticas-servicio/estadisticas-servicio';
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

  public estadisticas : Estadisticadb;
  public estadisticasData : Estadisticadb [] = [];
  public estadisticasservice : Estadistica;
  public estadisticasservicedata : Estadistica[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage,
    public dao : EstadisticasDaoProvider,
    public service : EstadisticasServicioProvider     ) {
    this.estadisticasservice = new Estadistica();
      
  }

  ionViewDidEnter() {
    this.storage.get('user').then(val =>{
      this.estadisticasservice.nombre = val;
      this.load();
    });
   

  }
  load(){
    this.service.getByOne(this.estadisticasservice)
    .subscribe(res=>{
      if(res.success){
        console.log(res.success);

        this.estadisticasservicedata = res.user;
      
      }else{
        console.log(res.success);
       
      }

    });

  }
  goToEsta() {
    this.navCtrl.push(EstadisticasPage);
  }

  goToRegi() {
    this.navCtrl.push(RegistroPage);
  }

  logout() {
    this.storage.set("logged", false);
    this.dao.all().then(data=>{
      this.estadisticasData = data;
      
      for (var i = 0; i < this.estadisticasData.length; i++) {
        
        this.estadisticas = new Estadisticadb();
        this.estadisticas.id = this.estadisticasData[i].id;
        this.estadisticas.fecha=this.estadisticasData[i].fecha;
        if(this.estadisticasservicedata.length <this.estadisticasData.length){
            for(var e = 0; e <this.estadisticasservicedata.length; e++){  
                    if(this.estadisticasservicedata[e].fecha == this.estadisticasData[i].fecha){
                      this.dao.delete(this.estadisticas.id);
                      }else{
                        let estadisticasservice2 = new Estadistica();
                        estadisticasservice2.nombre= this.estadisticasData[i].nombre;
                        estadisticasservice2.fecha= this.estadisticasData[i].fecha;
                        estadisticasservice2.letra= this.estadisticasData[i].letra;
                        estadisticasservice2.nivel= this.estadisticasData[i].nivel;
                        this.service.insert(estadisticasservice2)
                        this.dao.delete(this.estadisticas.id);
                      }
            }
        }
        
      }
      this.navCtrl.setRoot(LoginPage);
    });
        
  }

}
