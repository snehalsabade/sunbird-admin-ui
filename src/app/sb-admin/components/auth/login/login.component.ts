import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import auth from 'src/config/auth.config.json';

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

    constructor(public layoutService: LayoutService,
                public route: ActivatedRoute,
                public router: Router
                ) { }

    generateToken(){
        if (!this.username || !this.token){
            alert("Enter Domain URL and Token")
            this.router.navigate(['pages/sb-user']);
        } else {
            auth.CREDENTIALS.AUTHKEY = this.authKey;
            auth.CREDENTIALS.INSTANCE = this.username;
            auth.CREDENTIALS.USER_TOKEN = this.token;
            this.router.navigate(['pages/sb-user']);
        }
        
    }
}
