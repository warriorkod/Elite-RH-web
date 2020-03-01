import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services';
import { Post } from 'src/app/models/post';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-view-single-job',
  templateUrl: './view-single-job.component.html',
  styleUrls: ['./view-single-job.component.css']
})
export class ViewSingleJobComponent implements OnInit {
  postId: any;
  post: Post = new Post();
  show = true;
  addForm: FormGroup;


  constructor(private apiservice: SessionService, private router: ActivatedRoute, private route: Router) { 
    this.router.params.subscribe(params => (this.postId = params['id']));
  }

  ngOnInit() {
    if(this.postId){
      this.apiservice.getSinglePost(this.postId).then(
        (post: Post) => {
          if (post){
            this.post = post;
            this.buildAddPostForm();
          }
        }
      );
    }
  }

  buildAddPostForm(){
    this.addForm = new FormGroup({
      titre: new FormControl (this.post.titre, Validators.required),
      lieu: new FormControl (this.post.lieu, Validators.required),
      type: new FormControl (this.post.type, Validators.required),
      categorie: new FormControl (this.post.categorie, Validators.required),
      fiche: new FormControl (this.post.fiche, Validators.required),
      competences: new FormControl (this.post.competences, Validators.required),
      date_val: new FormControl (this.post.date_val, Validators.required),
      structure_name: new FormControl (this.post.structure_name, Validators.required)
    });
  }

  modifierPost(){
    console.log('modifier post');
  }

  supprimerPost(){
    Swal.fire({
      title: 'Voulez-vous vraiment supprimer ce poste?',
      text: "Le poste sera définitivement supprimé!",
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
        )
        this.apiservice.removePosts(this.post);
        this.route.navigate(['/admin_home_elith_rh/post_list']);
      }
    })
  }

  viewCandidatures(){
    console.log("candidatures");
  }

  showUpdateSection(){
    this.show = false;
  }

  getBack(){
    this.show = true;
  }

  getBackListPost(){
    this.route.navigate(['/admin_home_elith_rh/post_list']);
  }

  addPost(post){
    Swal.fire({
      title: 'Voulez-vous vraiment modifier ce poste?',
      text: "Confirmez votre choix svp!",
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
        )
        post.id = this.post.id;
        this.apiservice.updatePost(post);
        this.apiservice.getSinglePost(this.postId).then(
          (post: Post) => {
            if (post){
              this.post = post;
            }
          }
        );
        this.show = true;
      }
    })
  }

}
