
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DataTablesModule } from 'angular-datatables';

import { BodyComponent } from './list-user/list-user.component';
import { AdminShareModule } from '../admin-share/admin-share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';
import { AdminHomeComponent } from './admin-home.component';
import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { ViewSingleJobComponent } from './view-single-job/view-single-job.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PostsFilterOrderByDatePipe } from 'src/app/pipes';
import { PostsFilterByTypePipe } from '../../../pipes/posts-filter-by-type.pipe';
import { PostsFilterByTittrePipe } from 'src/app/pipes/posts-filter-by-tittre.pipe';
import { CandidaturesBySactoryComponent } from './candidatures-by-sactory/candidatures-by-sactory.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    BodyComponent,
    PostComponent,
    AddPostComponent,
    PostsFilterByTypePipe, PostsFilterByTittrePipe,
    PostsFilterOrderByDatePipe, ViewSingleJobComponent, CandidaturesComponent, CandidaturesBySactoryComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    DataTablesModule,
    MatDialogModule,
    MatSidenavModule, MatListModule, AdminHomeRoutingModule,
    AdminShareModule, FormsModule, ReactiveFormsModule, NgxPaginationModule,
    MaterialDesignFrameworkModule,
    EditorModule
  ],
  providers: []
})
@NgModule({

})
export class AdminHomeModule { }
