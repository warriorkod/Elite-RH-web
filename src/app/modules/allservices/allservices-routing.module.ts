import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllservicesComponent } from './allservices.component';


const routes: Routes = [
  {
    path: '',
    component: AllservicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllservicesRoutingModule { }
