import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SessionService } from 'src/app/services';
import { User } from '../../../../models/user';
import { Subscription, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  usersSubscription: Subscription;
  users: User[] = [];

  action = 'Inactif';
  btnStyle = 'btn-inactif';

  constructor( public dialog: MatDialog, private route: Router, private apiservice: SessionService) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: false,
      paging: true,
      info: true
    };
    this.usersSubscription = this.apiservice.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users.filter(user => user.isAdmin !== true);
        this.dtTrigger.next();
      }
    );
    this.apiservice.emitUsers();
  }

  onClick(user) {
    Swal.fire({
      title: 'Voulez-vous vraiment modifier le statut de cet utilisateur?',
      text: 'L\'utilisateur ne pourra plus s\'authentifier!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, modifier!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Modifié!',
          'L\'utilisateur  a été modifié avec succès.',
          'success'
        );
        user.active = user.active ? false : true;
        this.dtTrigger.unsubscribe();
        this.apiservice.updateUser(user);
      }
    });
  }

  checkStatus(user): string {
    if (user.active) {
      return 'btn-actif';
    } else {
      return 'btn-inactif';
    }
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.dtTrigger.unsubscribe();
  }


}
