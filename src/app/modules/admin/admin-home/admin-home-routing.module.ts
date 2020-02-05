import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { AuthGard } from '../guards/is_authenticated';


const routes: Routes = [
  { path: '', component: AdminHomeComponent},
  { path: 'user_add', component: AdminHomeComponent },
  { path: 'user_list', component: AdminHomeComponent },
  { path: 'post_list', component: AdminHomeComponent },
  { path: 'post_add', component: AdminHomeComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }