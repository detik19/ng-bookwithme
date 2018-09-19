import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';


export abstract class RestService {
  // protected baseUrl: 'http://localhost/';


  protected constructor(protected  http: HttpClient) {}

  protected convertArrayResponse(res: HttpResponse<any[]>): HttpResponse<any[]> {
    const jsonResponse: any[] = res.body;
    const body: any[] = [];
    for (let i = 0; i < jsonResponse.length; i++) {
        body.push(this.convertItemFromServer(jsonResponse[i]));
    }

    return res.clone({body});
  }

  private convertItemFromServer(item: any): any {
    const copy: any = Object.assign({}, item);

  return copy;

  }

  protected convertResponse(res: HttpResponse<any>): HttpResponse<any> {
    const body: any = this.convertItemFromServer(res.body);
    return res.clone({body});
  }


}
