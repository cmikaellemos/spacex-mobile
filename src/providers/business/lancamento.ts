import { ApiProvider } from './../api/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LancamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LancamentoProvider {

  constructor(
    public http: HttpClient,
    private apiProvider: ApiProvider 
  ) {

  }

  listarLancamentos(){
    return this.apiProvider.get(`/launches/past`);
  }

  obterLancamento(id: number){
    return this.apiProvider.get(`/launches/${id}`);
  }

  listarLancamentosFuturos(){
    return this.apiProvider.get('/launches/upcoming');
  }

}
