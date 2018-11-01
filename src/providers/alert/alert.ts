import { Injectable } from '@angular/core';
import { 
	Alert,
	AlertController 
} from 'ionic-angular';

// Providers
import { TranslateProvider } from '../translate/translate';

@Injectable()
export class AlertProvider {

  private alert: Alert;

  constructor(
    private alertCtrl: AlertController,
    private translateProvider: TranslateProvider
  ) { }

  public show(buttons?: any[], title?: string, subTitle?: string, enableBackdropDismiss?: boolean){
    this.alert = this.alertCtrl.create({
      ...title? {title: this.translateProvider.translate(title)} : {},
      ...subTitle? {subTitle: this.translateProvider.translate(subTitle)} : {},
      ...enableBackdropDismiss? {enableBackdropDismiss: enableBackdropDismiss}: {enableBackdropDismiss: false},
      ...buttons? {buttons: this.translateButtons(buttons)} : {buttons: [this.translateProvider.translate("ALERT.BOTOES.BOTAO_OK")]}
    })
    this.alert.present();
  }

  private translateButtons(buttons: any[]){
    let buttonsAlert: any[] = [];
    for(let button of buttons){
      button['text'] = this.translateProvider.translate(button['text']);
      buttonsAlert.push(button);
    }
    return buttonsAlert;
  }
}