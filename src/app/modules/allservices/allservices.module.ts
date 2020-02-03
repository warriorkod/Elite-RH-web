import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllservicesRoutingModule } from './allservices-routing.module';
import { AllservicesComponent } from './allservices.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AllservicesComponent],
  imports: [
    CommonModule,
    AllservicesRoutingModule,
    SharedModule
    
  ]
})
export class AllservicesModule { }
