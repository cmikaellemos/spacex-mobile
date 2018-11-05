import { LancamentoPage } from './../../pages/lancamento/lancamento';
import { NavController } from 'ionic-angular';
import { Lancamento } from './../../model/interface/lancamento.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardLancamentoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-lancamento',
  templateUrl: 'card-lancamento.html'
})
export class CardLancamentoComponent {

  @Input('data') data: Array<Lancamento>;

  constructor(
    private navCtrl: NavController
  ) {}

  verLancamento(id: number){
    this.navCtrl.push(LancamentoPage, {id: id});
  }

}
