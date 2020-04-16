import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'post_add'},
  { path: 'user_add', component: AdminHomeComponent },
  { path: 'user_list', component: AdminHomeComponent },
  { path: 'post_list', component: AdminHomeComponent },
  { path: 'post_add', component: AdminHomeComponent },
  { path: 'candidatures', component: AdminHomeComponent },
  { path: 'candidaturesByFactory', component: AdminHomeComponent },
  { path: 'single_post/:id', component: AdminHomeComponent }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
