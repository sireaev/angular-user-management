import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagementTableComponent } from './user-management-table/user-management-table.component';
import { UserManagementComponent } from './user-management.component';


const routes: Routes = [{
  path: '', component: UserManagementComponent, children: [
    { path: '', component: UserManagementTableComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
