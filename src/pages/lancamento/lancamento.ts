import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SpacexProvider } from './../../providers/business/spacex';
import { Lancamento } from './../../model/interface/lancamento.interface';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {

  public lancamento: Lancamento;

  options : InAppBrowserOptions = {
    location : 'no',
    clearcache : 'yes',
    clearsessioncache : 'yes', 
    closebuttoncaption : 'Fechar', 
    toolbar : 'yes',
    fullscreen : 'yes',    
};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexProvider: SpacexProvider,
    private theInAppBrowser: InAppBrowser,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    let id = this.navParams.get("id");
    this.spacexProvider.obterLancamento(id).then((value: Lancamento) => {
      this.lancamento = value;
      console.log(this.lancamento);
    })
  }

  verVideo(){
    if(this.lancamento.links.video_link != null && this.lancamento.links.video_link != ""){
      this.theInAppBrowser.create(this.lancamento.links.video_link, "_blank", this.options).show();
    } else {
      this.toastCtrl.create({
        duration: 2000,
        message: "Não existe vídeo disponível"
      }).present();
    }
  }

}
