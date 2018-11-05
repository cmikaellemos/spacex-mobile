import { ENV } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { 
	HttpClient, 
	HttpHeaders, 
	HttpParams
} from '@angular/common/http';

@Injectable()
export class ApiProvider {

	private httpHeader: HttpHeaders;
	private baseUrl = ENV.baseUrl;

	constructor(private http: HttpClient) {
		this.httpHeader = new HttpHeaders({
			"Accept": "application/json; charset=utf-8",
			"Content-Type": "application/json; charset=utf-8"
		});
	}

	get(url: string, parametros?: HttpParams) {
		return this.http.get( this.baseUrl + url, { headers: this.httpHeader, params: parametros }).toPromise();
	}
	
	post(url: string, data: any): Promise<any> {
		return this.http.post( this.baseUrl + url, JSON.stringify(data), {headers: this.httpHeader}).toPromise();
	}
}