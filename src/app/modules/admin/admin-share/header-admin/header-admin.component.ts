import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

 
  activeRouter : ActivatedRoute
  router : Router
  email :String 
  constructor(activerouter : ActivatedRoute, router: Router) { 
    this.router = router,
    this.activeRouter = activerouter
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.email = params.get('email')
    });
  }

  deconnexion(){
    localStorage.setItem('token', "");
    console.log("Deconnexion");
    this.router.navigate(['/login']);
  }

}
