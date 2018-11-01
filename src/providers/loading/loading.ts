import { Injectable } from '@angular/core';
import { 
	Loading,
	LoadingController 
} from 'ionic-angular';

// Providers
import { TranslateProvider } from '../translate/translate';

@Injectable()
export class LoadingProvider {

  private loading: Loading;
  private count: number = 0;

  constructor(
		private loadingCtrl: LoadingController,
    private translateProvider: TranslateProvider
  ) { 
    
  }

  public show(text?: string){
    if(this.count === 0) {
      this.loading = this.loadingCtrl.create({
        content: text ? this.translateProvider.translate(text) : this.translateProvider.translate("LOADING.CARREGANDO")
      });
      this.loading.present();
    }
    this.count++;
  }

  public hide(){
    this.count--;
    if(this.count === 0) {
      this.loading.dismiss();
    }
  }
}