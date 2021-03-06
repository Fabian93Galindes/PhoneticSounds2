import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { TiposPage } from '../pages/tipos/tipos';
import { ConfigurationPage} from '../pages/configuration/configuration';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { VocalesPage} from '../pages/vocales/vocales';
import { VocalAPage} from '../pages/vocal-a/vocal-a';
import { DbusuarioProvider } from '../providers/dbusuario/dbusuario';
import { VocalA2Page } from '../pages/vocal-a2/vocal-a2';
import { VocalA3Page } from '../pages/vocal-a3/vocal-a3';
import { VocalA4Page } from '../pages/vocal-a4/vocal-a4';
import { DatabaseConnectionProvider } from '../providers/database-connection/database-connection';
import { EstadisticasDaoProvider } from '../providers/estadisticas-dao/estadisticas-dao';
import { EstadisticasServicioProvider } from '../providers/estadisticas-servicio/estadisticas-servicio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TiposPage,
    ConfigurationPage,
    EstadisticasPage,
    VocalAPage,
    VocalesPage,
    VocalA2Page,
    VocalA3Page,
    VocalA4Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    TiposPage,
    ConfigurationPage,
    EstadisticasPage,
    VocalAPage,
    VocalesPage,
    VocalA2Page,
    VocalA3Page,
    VocalA4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbusuarioProvider,
    DatabaseConnectionProvider,
    EstadisticasDaoProvider,
    EstadisticasServicioProvider
  ]
})
export class AppModule {}
