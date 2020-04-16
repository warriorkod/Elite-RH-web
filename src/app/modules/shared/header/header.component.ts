import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { SessionService } from 'src/app/services';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('subscribe', {static: true}) private subscribe: SwalComponent;
  @ViewChild('signin', {static: true}) private signin: SwalComponent;

  info: {
    'titre': string;
    'description': string;
  };
  main = true;
  contact: boolean;
  about: boolean;
  job: boolean;
  isAuth: boolean;
  register: FormGroup;
  login: FormGroup;
  headerInfo = {
    about: {
      titre: 'A propos de nous',
      description: 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    contact: {
      titre: 'Contactez nous',
      description: 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },
    job: {
      titre: 'Nos offres d' + '\'' + 'empoi',
      description: 'There spirit beginning bearing the open at own every give appear in third you sawe two boys'
    },

  };
  errorMessage: string;

  public constructor(private dialog: MatDialog,  private router: Router, private apiservice: SessionService,
                     public readonly swalTargets: SwalPortalTargets
    ) {
      this.router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
    }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    this.buildRegisterForm();
    this.buildLoginForm();
  }

  getCurrentLink(route) {
    if (this.router.url.includes(route)) {
      return true;
    }
    return false;
  }

  open_nav() {
    $('.main-menu ul').slideToggle(500);
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (event.url.includes('/sign_in')) {
        this.main = true;
      } else {
        this.main = false;
        if (event.url.includes('/contact')) {
          this.contact = true;
          this.about = false;
          this.info = this.headerInfo.contact;
        } else if (event.url.includes('/about')) {
          this.about = true;
          this.contact = false;
          this.info = this.headerInfo.about;
        } else if (event.url.includes('/job')) {
          this.about = false;
          this.contact = false;
          this.job = true;
          this.info = this.headerInfo.job;
        } else {
          this.main = true;
        }
      }
    }
  }

  buildRegisterForm(): void {
    this.register = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirm: new FormControl('', Validators.required),
      date_naissance: new FormControl('', Validators.required)
    });
  }


  buildLoginForm(): void {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  getLogin() {
    this.signin.fire();
  }

  onLogin(formValue) {
    this.apiservice.signInUser(formValue).then( () => {
      Swal.fire({
        icon: 'success',
        title: 'Bienvenue.',
        showConfirmButton: false,
        timer: 1500
      });
    },
    (error) => {
      let message: string;
      if (error.code === 'auth/user-not-found') {
        message = 'Adresse Email invalide!';
      } else if (error.code === 'auth/wrong-password') {
        message = 'Mot de passe incorrecte!';
      } else if (error.code === 'userNotActived') {
        message = 'Votre compte a été désactivé. Veuillez contacter l\'administrateur!';
      } else {
        message = 'Une erreur est ssurvenue. Veuillez réessayer svp!';
      }
      Swal.fire(
        'Oups!',
        message,
        'error'
      );
    });
  }

  signup() {
    this.subscribe.fire();
  }

  createUser(formValue) {
    if (formValue.password !== formValue.password_confirm) {
      this.errorMessage = 'Les mots de passe ne sont pas identiques';
      return;
    }
    this.apiservice.createNewUser(formValue).then( () => {
      Swal.fire({
        icon: 'success',
        title: 'Compte créé avec succès.',
        showConfirmButton: false,
        timer: 1500
      });
    },
    (error) => {
      let message: string;
      if (error.code === 'auth/email-already-in-use') {
        message = 'L\'adresse e-mail est déjà utilisée par un autre compte!';
      } else if (error.code === 'auth/weak-password') {
        message = 'Le mot de passe doit contenir au moins 6 caractères!';
      } else {
        message = 'Une erreur est ssurvenue. Veuillez réessayer svp!';
      }
      Swal.fire(
        'Oups!',
        message,
        'error'
      );
    });
  }

  signout() {
    this.apiservice.signOutUser().then( () => {
      this.router.navigate(['sign_in']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'A très bientôt.',
        showConfirmButton: false,
        timer: 1500
      });
    },
    (error) => {
      Swal.fire(
        'Oups!',
        'Une erreur est survenue.',
        'error'
      );
    });
  }

  closeSignin() {
    this.signin.dismiss();
  }


  closeSignup() {
    this.subscribe.dismiss();
  }

  clearInput() {
    this.errorMessage = '';
  }

}
