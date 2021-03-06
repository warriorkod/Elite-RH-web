import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services';
import { Post } from 'src/app/models/post';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import {formatDate} from '@angular/common';




@Component({
  selector: 'app-view-single-job',
  templateUrl: './view-single-job.component.html',
  styleUrls: ['./view-single-job.component.css']
})
export class ViewSingleJobComponent implements OnInit {
  @ViewChild('fcompetences', {static: false}) private competenceEl: ElementRef;

  postId: any;
  post: Post = new Post();
  show = true;
  addForm: FormGroup;
  minDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  competences: string[] = [];



  constructor(private apiservice: SessionService, private router: ActivatedRoute, private route: Router) {
    this.router.params.subscribe(params => (this.postId = params.id));
  }

  ngOnInit() {
    if (this.postId) {
      this.apiservice.getSinglePost(this.postId).then(
        (post: Post) => {
          console.log(post);
          if (post) {
            this.post = post;
            this.competences = this.post.competences;
            this.buildAddPostForm();
          }
        }
      );
    }
  }

  buildAddPostForm() {
    this.addForm = new FormGroup({
      titre: new FormControl (this.post.titre, Validators.required),
      lieu: new FormControl (this.post.lieu, Validators.required),
      type: new FormControl (this.post.type, Validators.required),
      categorie: new FormControl (this.post.categorie, Validators.required),
      fiche: new FormControl (this.post.fiche, Validators.required),
      /*competences: new FormControl (this.post.competences, Validators.required),*/
      date_val: new FormControl (this.post.date_val, Validators.required),
      structure_name: new FormControl (this.post.structure_name, Validators.required),
      secteur: new FormControl (this.post.secteur, Validators.required)
    });
  }

  modifierPost() {
    console.log('modifier post');
  }

  supprimerPost() {
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer ce poste?',
      text: 'Le poste sera définitivement supprimé!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Supprimé!',
          'Votre poste a été supprimé avec succès.',
          'success'
        );
        this.apiservice.removePosts(this.post);
        this.route.navigate(['/admin_home_elith_rh/post_list']);
      }
    });
  }

  showUpdateSection() {
    this.show = false;
  }

  getBack() {
    this.show = true;
  }

  getBackListPost() {
    this.route.navigate(['/admin_home_elith_rh/post_list']);
  }

  addPost(post: Post) {
    Swal.fire({
      title: 'Voulez-vous vraiment modifier ce poste?',
      text: 'Confirmez votre choix svp!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, modifier!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Modifié!',
          'Votre poste a été modifié avec succès.',
          'success'
        );
        post.id = this.post.id;
        post.competences = this.competences;
        this.apiservice.updatePost(post);
        /*this.apiservice.getSinglePost(this.postId).then((poste: Post) => {
            if (poste) {
              this.post = poste;
            }
          }
        );*/
        this.show = true;
      }
    });
  }

  addCompetences(competence) {
    if (competence) {
      let competenceIndexToAdd = false;
      this.competences.findIndex(
        (competenceOne) => {
          if (competenceOne === competence) {
            competenceIndexToAdd = true;
          }
        }
      );
      if (competenceIndexToAdd) {
        Swal.fire(
          'Oups!!',
          'Cette compétnece existe déjà!',
          'info'
        );
        this.competenceEl.nativeElement.value = '';
      } else {
        this.competences.push(competence);
        this.competenceEl.nativeElement.value = '';
      }
    } else {
      return;
    }
  }

  deleteCompetence(competence) {
    const competenceIndexToRemove = this.competences.findIndex(
      (competenceOne) => {
        if (competenceOne === competence) {
          return true;
        }
      }
    );
    this.competences.splice(competenceIndexToRemove, 1);
  }

}
