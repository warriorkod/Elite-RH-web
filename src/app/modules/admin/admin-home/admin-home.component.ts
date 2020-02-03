import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers: [DatePipe]

})
export class AdminHomeComponent implements OnInit {


  activeRouter: ActivatedRoute;
  router : Router;

  addUser = false;
  listUser= true;
  addPost = false;
  listPost = false;
  addMission = false;
  listMission = false;

  route;

  constructor(activeRouter : ActivatedRoute, router: Router) {
    this.activeRouter = activeRouter;
    this.router = router;
    console.log('papa')
  }

  ngOnInit() {
    // if(localStorage.getItem('token')===""){
    //   this.router.navigate(['/login']);
    //   return;
    // }

    this.activeRouter.url.subscribe(value => {
      this.route = value;
      console.log(this.route);
      if(value.length > 0)
        this.checkRoute();  
    })
  }

  checkRoute(){

    switch(this.route[0].path){
      case "user_add" : {
        this.addUser= true;
        this.listUser= false;
        this.addPost = false;
        this.listPost = false;
        this.addMission = false;
        this.listMission = false;
        break;
      }
      case "user_list" : {
        this.addUser= false;
          this.listUser= true;
          this.addPost = false;
          this.listPost = false;
          this.addMission = false;
          this.listMission = false;        
        break;
      }
      case "post_add" : {
        this.addPost= true;
          this.listPost= false;
          this.addUser = false;
          this.listUser = false;
          this.addMission = false;
          this.listMission = false;
          break;
      }
      case "post_list" : {
          this.addPost= false;
          this.listPost= true;
          this.addUser = false;
          this.listUser = false;
          this.addMission = false;
          this.listMission = false;  
        break;
      }
    }
   
  }

}

