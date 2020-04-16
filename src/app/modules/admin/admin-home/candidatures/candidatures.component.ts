import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Candidature } from 'src/app/models/candidature';
import { SessionService } from 'src/app/services';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit, OnDestroy {
  p = 1;
  candidaturesSubscription: Subscription;
  candidatures: any[] = [];

  constructor(private apiservice: SessionService, private router: Router) { }

  ngOnInit() {
    this.candidaturesSubscription = this.apiservice.candidaturesSubject.subscribe(
      (candidatures: Candidature[]) => {
        this.candidatures = candidatures;
        let postEL: Post;
        for (let i = 0; i < candidatures.length; i++) {
          this.apiservice.getPostById(this.candidatures[i].id).then(
            (post: Post) => {
              if (post) {
                postEL = post;
                this.candidatures[i] = {...candidatures[i], ...postEL};
                console.log(this.candidatures[i]);
              }
            }
          );
        }
      }
    );
    this.apiservice.emitCandidatures();
  }

  ngOnDestroy() {
    this.candidaturesSubscription.unsubscribe();
  }

}
