import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/app/sb-admin/service/user.service';
import { userRoleCountModel} from 'src/app/sb-admin/api/user'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  loading: boolean = false;
  userRole: string[] = [];
  roles:any;
  userRoleCount: userRoleCountModel[] = [];

  constructor(
    private userService: UserService) {
  }
  ngOnInit(): void {
    this.getAllUserRoles();
  }

  getAllUserRoles(): void {
    const body = {
      "request": {
        "type": "config",
        "action": "get",
        "subType": "userType",
        "rootOrgId": "*",
        "component": "portal"
      }
    };
    this.userService.getAllUserRoles(body).subscribe((response: any) => {
      const fields = response?.result?.form?.data?.fields;
      this.roles = fields.map((f: any) => f.code);
      this.getUserCount(this.roles);
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    })
  }

  getUserCount(roles: string[]): void {
    const body = {
      request: {
        filters: {
          "profileUserType.type": this.roles
        }
      }
    }
    this.userService.getUsersCountByRole(body).subscribe((response: any) => {
      const users = response?.result?.response?.content;
      this.roles.forEach((role: string) => {
        const count = users.filter((user: any) => user.profileUserType.type === role).length
        this.userRoleCount.push({roleName: role, count: count});
      });
    }, (error: any) => {
      console.error(error);
      this.loading = false;
    })
  }
}
