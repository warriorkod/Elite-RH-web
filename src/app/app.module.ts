import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInterceptor } from './interceptors/app-interceptor';
import { AppGuard } from './guards/is_authentificated';
import { IsAdmin } from './guards/is_admin';
import { SessionService } from './services';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppGuard, IsAdmin, SessionService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
