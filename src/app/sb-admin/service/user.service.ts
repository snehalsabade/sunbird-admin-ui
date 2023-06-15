import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getOrganizations(body: any): Observable<Object> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json'
    })
    return this.http.post(environment.orgUrl, body, { headers: header })
  }

  getOrganizationUserList(body: any): Observable<Object> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": environment.authKey,
      "x-authenticated-user-token": environment.userToken,
    })
    return this.http.post(environment.userUrl, body, { headers: header })
  }

  saveUserRole(payload: any): Observable<any> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": environment.authKey,
      "x-authenticated-user-token": environment.userToken,
    })
    return this.http.post(environment.userUpdateRoleUrl, payload, { headers: header });
  }
  addNewUser(payload: any): Observable<any> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": environment.authKey,
      "x-authenticated-user-token": environment.userToken,
    })
    return this.http.post(environment.userCreateUrl, payload, { headers: header });
  }

  blockUnblockUser(payload: any, userStatus: any): Observable<any> {
    let header = new HttpHeaders({
      "Content-Type": 'application/json',
      "Authorization": environment.authKey,
      "x-authenticated-user-token": environment.userToken,
    })
    if (userStatus) {
      return this.http.post(environment.blockUserUrl, payload, { headers: header });
    } else {
      return this.http.post(environment.unblockUserUrl, payload, { headers: header });
    }
  }
}
