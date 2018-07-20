import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import {Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;
  constructor(private router: Router,private route : ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

  }
onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
}

}

