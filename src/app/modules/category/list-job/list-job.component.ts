import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openSingkeJob(){
    this.router.navigate(['/job/single-job']);
  }

}
