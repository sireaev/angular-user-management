import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserManagementTableComponent } from './user-management-table/user-management-table.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UserManagementComponent, UserManagementTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserManagementRoutingModule,
    SharedModule
  ]
})
export class UserManagementModule { }
