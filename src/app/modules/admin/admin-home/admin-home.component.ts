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




  addUser = false;
  listUser= false;
  addPost = true;
  listPost = false;
  addMission = false;
  listMission = false;
  singlePost = false;
  route;


  constructor(private activeRouter : ActivatedRoute, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRouter.url.subscribe(value => {
      this.route = value;
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
        break;
      }
      case "user_list" : {
        this.addUser= false;
          this.listUser= true;
          this.addPost = false;
          this.listPost = false;    
        break;
      }
      case "post_add" : {
        this.addPost= true;
          this.listPost= false;
          this.addUser = false;
          this.listUser = false;
          break;
      }
      case "post_list" : {
          this.addPost= false;
          this.listPost= true;
          this.addUser = false;
          this.listUser = false; 
        break;
      }
      case "single_post" : {
        this.singlePost = true;
        this.addPost= false;
        this.listPost= false;
        this.addUser = false;
        this.listUser = false; 
      break;
    }
    }
   
  }

}

