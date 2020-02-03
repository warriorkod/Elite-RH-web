import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  
  dropdown = document.getElementsByClassName("dropdown-btn");
  dropdownContent

  constructor(private activeRouter : ActivatedRoute) { }

  ngOnInit() {
    this.dropdownContent = this.dropdown[0].nextElementSibling;
    this.dropdownContent.style.display = "block";
    this.dropdownContent.style.background= "seashell";
    
    // this.setDropdownMenu();
  }

  /*checkRoute (){
    this.activeRouter.url.subscribe(value => {
      this.path = value[0].path;
    });
  }
*/
  menu(index){
    this.dropdown[index].classList.toggle("active");
    this.dropdownContent = this.dropdown[index].nextElementSibling;
    
    if (this.dropdownContent.style.display === "block") {
      this.dropdownContent.style.display = "none";
    } else {
      this.dropdownContent.style.display = "block";
      this.dropdownContent.style.background= "seashell";
    }

    for (let i = 0; i < this.dropdown.length; i++) {
      if(i != index){
        this.dropdownContent = this.dropdown[i].nextElementSibling;
        this.dropdownContent.style.display = "none";
      }
    }    
  }

}
