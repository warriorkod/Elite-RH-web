import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './modals/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './modals/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [];
@NgModule({
  declarations: [HeaderComponent, FooterComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgbModule
  ],
  entryComponents: [RegisterComponent, LoginComponent]

})
export class SharedModule { }
