import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipes.services";
import { Http } from "@angular/http";

@Injectable()
export class DataStorageService{
constructor(private http: Http, private recipeService: RecipeService){}

storeRecipes(){
    this.http.put();
}
}