import { SpacexProvider } from './../../providers/business/spacex';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lancamento } from '../../model/interface/lancamento.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lancamentos: Array<Lancamento>;

  constructor(
    public navCtrl: NavController,
    private spacexProvider: SpacexProvider
  ) {
    this.spacexProvider.listarLancamentosFuturos().then((value: Array<Lancamento>) => {
      this.lancamentos = value;
    })
  }

}
