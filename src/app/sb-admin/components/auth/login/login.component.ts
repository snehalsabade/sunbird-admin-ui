import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    username!: string;
    authKey!: any;
    token!: any;

    constructor(public layoutService: LayoutService,  public route: ActivatedRoute,
        public router: Router) { }

    generateToken(){
        if (!this.username || !this.token){
            alert("Enter Domain URL and TOKEN")
            this.router.navigate(['pages/sb-user']);
        } else {
            environment.authKey = this.authKey;
            environment.instance = this.username;
            environment.userToken = this.token;
            this.router.navigate(['pages/sb-user']);
        }
        
    }
}
