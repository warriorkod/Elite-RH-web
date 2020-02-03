import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-body',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class BodyComponent implements OnInit {

  dtOptions: DataTables.Settings={};

  users = [
  ];

  action: String = "Inactif";
  btnStyle : String = "btn-inactif";

  constructor( public dialog : MatDialog, private _userService : UserService) {}

  ngOnInit() {
    this.users = this._userService.getUsers();
    console.log(this.users);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: false,
      paging: true,
      info: false
    };
  }

  onClick(user){
      console.log(user);
      if(confirm("Voulez vous vraiment modifier le state du user ?")){
        if(user.status){
          console.log("user status before "+user.status);
          user.status=false
        }
        else{
          console.log("user status before "+user.status);
          user.status=true
        }
      }
      // let dialogRef = this.dialog.open(DialogComponent);

      // dialogRef.afterClosed().subscribe(result =>{
      //   console.log(result);
        // if(result){
        //   console.log("Result yes = "+result)
        // //   if(user.status){
        // //     console.log("user status before "+user.status);
        // //     user.status=false
        // // //     console.log("user status after "+user.status);
        // //   }
        // //   else{
        // //     console.log("user status before "+user.status);
        // //     user.status=true
        // // //     console.log("user status after "+user.status);
        // //   }
        // }
        // else{
        //   console.log("Result no = "+result)
        // }
      // });

      // if(user.status){
      //   user.status = false
      // }
      // else{
      //   user.status=true
      // }
  }

  checkStatus(user) : String{
    if(user.status){
      user.state = "Active"
      return "btn-actif"
    }
    else{
      user.state = "Desactive"
      return "btn-inactif"
    }
  }

}
