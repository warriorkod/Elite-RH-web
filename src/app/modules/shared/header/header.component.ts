import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { RegisterComponent } from '../modals/register/register.component';
import { LoginComponent } from '../modals/login/login.component';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: {
    'titre': string;
    'description': string;
  };
  main = true;
  contact: boolean;
  about: boolean;
  services: boolean;
  job: boolean;
  headerInfo = {
    'about':{
      'titre': 'A propos de nous',
      'description': 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    'contact':{
      'titre': 'Contactez nous',
      'description': 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    'services':{
      'titre': 'Nos services',
      'description': 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    'job':{
      'titre': 'Nos offres d'+"'"+'empoi',
      'description': 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    
  }

  constructor(private dialog: MatDialog,  private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
  }

  open_nav(){
    $('.main-menu ul').slideToggle(500);
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (event.url.includes('/sign_in')){
        this.main = true;
      }else{
        this.main = false;
        if (event.url.includes('/contact')){
          this.contact = true;
          this.about = false;
          this.services = false;
          this.info = this.headerInfo.contact
        }else if (event.url.includes('/about')){
          this.about = true;
          this.contact = false;
          this.services = false;
          this.info = this.headerInfo.about
        }else if (event.url.includes('/services')){
          this.services = true;
          this.about = false;
          this.contact = false;
          this.info = this.headerInfo.services
        }else if (event.url.includes('/job')){
          this.services = false;
          this.about = false;
          this.contact = false;
          this.job = true;
          this.info = this.headerInfo.job;
        }else{
          this.main = true;
        }
      }
    }
  }

  login() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(LoginComponent, dialogConfig);

  }

  signin(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegisterComponent, dialogConfig);
  }

}
