export class Post
{
    id?: string;
    titre : String;
    lieu : String;
    type : String;
    categorie : String;
    secteur : String;
    date_val : String;
    fiche : String;
    competences : String;

    constructor(){
        this.id = Math.random().toString(36).substring(2);
    }
}