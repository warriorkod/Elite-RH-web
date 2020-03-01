
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;


@Injectable()
export class SessionService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }


  constructor(protected _http: HttpClient, private _router: Router) {
    this.getAllPost();
  }

  //create a new post
  createNewPost(post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  //save a post
  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  //get all posts
  getAllPost(){
    firebase.database().ref('/posts').on('value', (data: Datasnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  //update a post
  updatePost(post: Post){
    const postIndexToUpdate = this.posts.findIndex(
      (postEl) => {
        if(postEl.id === post.id) {
          return true;
        }
      }
    );
    this.posts[postIndexToUpdate] = post;
    this.savePosts();
    this.emitPosts();
  }

  //remove a post
  removePosts(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  //get a single post
  getSinglePost(id: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: Datasnapshot) => {
            console.log(data.val())
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  //create a new user
  createNewUser(formValue) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(formValue.email, formValue.password).then(
          (data) => {
            console.log(data);
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  } 

  signInUser(formValue) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(formValue.email, formValue.password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}