import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign_in',
    pathMatch: 'full'
  },
  {
    path: 'sign_in',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/allservices/allservices.module').then(mod => mod.AllservicesModule)
  },
  {
    path: 'job',
    loadChildren: () => import('./modules/category/category.module').then(mod => mod.CategoryModule)
  },
  {
    path: 'admin_elith_rh',
    loadChildren: () => import('./modules/admin/admin-auth/admin-auth.module').then(mod => mod.AdminAuthModule)
  },
  {
    path: 'admin_home_elith_rh',
    loadChildren: () => import('./modules/admin/admin-home/admin-home.module').then(mod => mod.AdminHomeModule)
  },
  /*
  {  
    path: '**',
    redirectTo: '/sign_in',
    pathMatch: 'full'
  }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
