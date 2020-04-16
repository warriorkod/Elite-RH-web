import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { SessionService } from 'src/app/services';

@Component({
  selector: 'app-candidatures-by-sactory',
  templateUrl: './candidatures-by-sactory.component.html',
  styleUrls: ['./candidatures-by-sactory.component.css']
})
export class CandidaturesBySactoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  candidaruresByFactorySubject: Subscription;
  candidaturesBuFactory = [];
  constructor(private apiservice: SessionService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: false,
      paging: true,
      info: true
    };
    this.candidaruresByFactorySubject = this.apiservice.candidaruresByFactorySubject.subscribe(
      (candidaturesBuFactory) => {
        if (candidaturesBuFactory) {
          this.candidaturesBuFactory = candidaturesBuFactory;
          console.log(this.candidaturesBuFactory);
          this.dtTrigger.next();
        }
      }
    );
    this.apiservice.emitCandidaturesByFactory();
  }

  open(item) {}

}
