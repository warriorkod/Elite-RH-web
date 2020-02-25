
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DataTablesModule } from 'angular-datatables';

import { BodyComponent } from './list-user/list-user.component';
import { DialogComponent } from '../modals/dialog/dialog.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminShareModule } from '../admin-share/admin-share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostService } from '../services/post.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { FilterPostPipe } from '../pipes/filter-post.pipe';
import { AddMissionComponent } from './add-mission/add-mission.component';
import { FilterDatePipe } from '../pipes/filter-date.pipe';
import { FilterOtherPipe } from '../pipes/filter-other.pipe';
import { AdminHomeComponent } from './admin-home.component';
import { AdminHomeRoutingModule } from './admin-home-routing.module';


@NgModule({
  declarations: [
    AdminHomeComponent,
    BodyComponent,
    DialogComponent, 
    AddUserComponent, 
    PostComponent, 
    AddPostComponent, 
    FilterPostPipe, FilterDatePipe, FilterOtherPipe, AddMissionComponent, ],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MatDialogModule,
    MatSidenavModule, MatListModule, AdminHomeRoutingModule,
    AdminShareModule, FormsModule, ReactiveFormsModule, NgxPaginationModule,
    MaterialDesignFrameworkModule
  ],
  providers: [UserService, PostService]
})
@NgModule({
 
})
export class AdminHomeModule { }
