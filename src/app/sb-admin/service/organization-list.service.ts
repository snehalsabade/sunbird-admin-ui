import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import config from 'src/config/url.config.json';
import auth from 'src/config/auth.config.json';

@Injectable({
  providedIn: 'root'
})
export class OrganizationListService {

  constructor(private http: HttpClient) { }

  getAllOrganizationList(body: any): Observable<Object> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json'
    })
    return this.http.post(config.URLS.ORG_URL, body, { headers: header })
  }

  addOrg(body : any):Observable<any>{
    let header=new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": auth.CREDENTIALS.AUTHKEY,
      "x-authenticated-user-token": auth.CREDENTIALS.USER_TOKEN,
    })
 return this.http.post(config.URLS.ADD_ORG_URL,body,{headers: header})
}
}
