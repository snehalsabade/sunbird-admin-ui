import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../api/user';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }
    private getEndPointUrl(url: string): string {
        return `$environment.https://sunbirdsaas.com/${url}`
    }
    getOrganizations(payload:any):Observable<any>{
        let header = new HttpHeaders({
            "Content-Type": 'application/json',
            "Authorization": environment.authKey,
            "x-authenticated-user-token": environment.userToken,
        })
        return this.http.post(environment.orgUrl, payload, { headers: header });
    
    }
    // getUsersSmall() {
    //     return this.http.get<any>('assets/sb-admin/data/products-small.json')
    //         .toPromise()
    //         .then(res => res.data as User[])
    //         .then(data => data);
    // }

    // getUsers() {
    //     return this.http.get<any>('assets/sb-admin/data/response-users.json')
    //         .toPromise()
    //         .then(res => res.result.response.content)
    //         .then(data => data);
    // }

    // getUsersMixed() {
    //     return this.http.get<any>('assets/sb-admin/data/products-mixed.json')
    //         .toPromise()
    //         .then(res => res.data as User[])
    //         .then(data => data);
    // }

    // getUsersWithOrdersSmall() {
    //     return this.http.get<any>('assets/sb-admin/data/products-orders-small.json')
    //         .toPromise()
    //         .then(res => res.data as User[])
    //         .then(data => data);
    // }

getUserList(payload:any): Observable<any>{
    let header = new HttpHeaders({
        "Content-Type": 'application/json',
        "Authorization": environment.authKey,
        "x-authenticated-user-token": environment.userToken,
    })
    return this.http.post(environment.userUrl, payload, { headers: header });
}

    addNewUser(payload: any): Observable<any> {
        let header = new HttpHeaders({
            "Content-Type": 'application/json',
            "Authorization": environment.authKey,
            "x-authenticated-user-token": environment.userToken,
        })
        return this.http.post(environment.userCreateUrl, payload, { headers: header });
    }
    editUser(payload: any): Observable<any> {
        let header = new HttpHeaders({
            "Content-Type": 'application/json',
            "Authorization": environment.authKey,
            "x-authenticated-user-token": environment.userToken,
        })
        return this.http.post(environment.userUpdateUrl, payload, { headers: header });
    }
}
