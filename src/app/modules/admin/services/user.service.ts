import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id: 1,
      nom: "Diop",
      prenom: "Thiaba",
      status: true,
      state: "Actif"
    },
    {
      id: 2,
      nom: "Diaw",
      prenom: "Ababacar",
      status: false,
      state: ""
    },
    {
      id: 3,
      nom: "Kasse",
      prenom: "Mor Talla",
      status: true,
      state: ""
    },  
    {
      id: 4,
      nom: "Kane",
      prenom: "Abdoulaye",
      status: true,
      state: ""
    },
    {
      id: 5,
      nom: "Diagne",
      prenom: "Abdou Aziz",
      status: false,
      state: ""
    },
    {
      id: 6,
      nom: "Diagne",
      prenom: "Papa Moussa",
      status: true,
      state: ""
    },
    {
      id: 7,
      nom: "Diop",
      prenom: "Thiaba",
      status: false,
      state: ""
    },
    {
      id: 8,
      nom: "Diaw",
      prenom: "Ababacar",
      status: false,
      state: ""
    },
    {
      id: 9,
      nom: "Kasse",
      prenom: "Mor Talla",
      status: true,
      state: ""
    },  
    {
      id: 10,
      nom: "Kane",
      prenom: "Abdoulaye",
      status: true,
      state: ""
    },
    {
      id: 11,
      nom: "Diagne",
      prenom: "Abdou Aziz",
      status: false,
      state: ""
    },
    {
      id: 12,
      nom: "Diagne",
      prenom: "Papa Moussa",
      status: true,
      state: ""
    },
    {
      id: 13,
      nom: "Diop",
      prenom: "Thiaba",
      status: false,
      state: ""
    },
    {
      id: 14,
      nom: "Diaw",
      prenom: "Ababacar",
      status: true,
      state: ""
    },
    {
      id: 15,
      nom: "Kasse",
      prenom: "Mor Talla",
      status: false,
      state: ""
    },  
    {
      id: 16,
      nom: "Kane",
      prenom: "Abdoulaye",
      status: true
    },
    {
      id: 17,
      nom: "Diagne",
      prenom: "Abdou Aziz",
      status: true,
      state: ""
    },
    {
      id: 18,
      nom: "Diagne",
      prenom: "Papa Moussa",
      status:false,
      state: ""
    }
  ];
  
  constructor() { }

  getUsers(){
    return this.users;
  }
}
