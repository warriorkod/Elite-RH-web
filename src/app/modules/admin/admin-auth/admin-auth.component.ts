import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  constructor(private fb: FormBuilder, router: Router) { 
    this.createForm();
    this.router = router
  }

  angForm : FormGroup;
  email: String;
  password: String;
  router: Router;

  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  setLogin(form){
    this.email = form.email;
    this.password = form.password;
    console.log(form);

    if(this.email == "" || this.password == ""){
      if(this.email == "")
        console.log("Email vide");
      if(this.password == "")
        console.log("Password vide");
    }
    else{
      this.router.navigate(['/admin_home_elith_rh']);
    }
  }

  showValue(value){
    console.log(value);
  }

  ngOnInit() {
  }


}
