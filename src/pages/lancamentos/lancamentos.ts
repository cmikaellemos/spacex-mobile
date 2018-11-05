import { Lancamento } from './../../model/interface/lancamento.interface';
import { SpacexProvider } from './../../providers/business/spacex';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  public lancamentos: Array<Lancamento>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexProvider: SpacexProvider
  ) {
    this.spacexProvider.listarLancamentos().then((data: Array<Lancamento>) => {
      this.lancamentos = data.reverse();
    })
  }

  ionViewDidLoad() {
    
  }

}
