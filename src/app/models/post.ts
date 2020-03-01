export class Post
{
    id?: string;
    titre : String;
    lieu : String;
    type : String;
    categorie : String;
    secteur : String;
    date_create: string;
    date_val : String;
    fiche : String;
    competences : String;
    structure_name : string;

    constructor(){
        this.id = Math.random().toString(36).substring(2);
    }
}