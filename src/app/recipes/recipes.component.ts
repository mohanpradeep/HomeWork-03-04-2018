import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesServiceService } from './recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipesService: RecipesServiceService) { }

  ngOnInit() {
    this.recipesService.recipesServiceList
      .subscribe(
        (recipes: Recipe) =>{
          this.selectedRecipe = recipes;
        }
      );
  }

}