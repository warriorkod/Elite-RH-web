import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users = [];
  user = {};

  addForm: FormGroup;
  submitted = false;

  constructor(private _userService : UserService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.users = this._userService.getUsers();

    this.addForm = this.formBuilder.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      address:[],
      email:['', Validators.email],
      status:[]
    }, {});

  }

  addUser(form){
    console.log(this.addForm);

    this.submitted= true;
    if(form.invalid){
      console.log(form);
      return;
    }
    else {
      let result = this._userService.users.push({'id': this.users.length+1, 'nom': form.value.nom, 'prenom': form.value.surname,'status': form.value.state,'state': ""});

      // let result = this._userService.users.push(form.value);

      console.log(result);

      if(result){
          this.router.navigate(['/home/user/list']);
      }
    }
  }

}
