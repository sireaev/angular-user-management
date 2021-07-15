import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-management-table',
  templateUrl: './user-management-table.component.html',
  styleUrls: ['./user-management-table.component.scss']
})
export class UserManagementTableComponent implements OnInit {
  users: UserModel[];
  isLoading: boolean = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.retrieveUsers();
  }

  retrieveUsers(data: any = {}): void {
    this.userService.list(data).subscribe((response: UserModel[]) => {
      this.users = response;
      this.isLoading = false;
    }, () => {
      console.error('HUINEA TAT ASTA');
      this.isLoading = false;
    })
  }

}
