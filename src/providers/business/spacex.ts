import { LancamentoProvider } from './lancamento';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpacexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexProvider {

  constructor(
    private lancamentoProvider: LancamentoProvider
  ) {
  
  }

  listarLancamentos(){
    return this.lancamentoProvider.listarLancamentos();
  }

  obterLancamento(id: number){
    return this.lancamentoProvider.obterLancamento(id);
  }

  listarLancamentosFuturos(){
    return this.lancamentoProvider.listarLancamentosFuturos();
  }

}
