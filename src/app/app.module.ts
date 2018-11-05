import { LancamentoPage } from './../pages/lancamento/lancamento';
import { CardLancamentoComponent } from './../components/card-lancamento/card-lancamento';
import { LancamentosPage } from './../pages/lancamentos/lancamentos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { 
  TranslateModule,
	TranslateLoader 
} from '@ngx-translate/core';
import { TranslateProvider } from './../providers/translate/translate';

import { InAppBrowser } from '@ionic-native/in-app-browser';


import { 
	HttpClient, 
	HttpClientModule 
} from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { AlertProvider } from '../providers/alert/alert';
import { LoadingProvider } from '../providers/loading/loading';
import { SpacexProvider } from '../providers/business/spacex';
import { LancamentoProvider } from '../providers/business/lancamento';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LancamentosPage,
    LancamentoPage,
    CardLancamentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LancamentosPage,
    CardLancamentoComponent,
    LancamentoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TranslateProvider,
    ApiProvider,
    AlertProvider,
    LoadingProvider,
    SpacexProvider,
    LancamentoProvider,
    InAppBrowser
  ]
})
export class AppModule {}
