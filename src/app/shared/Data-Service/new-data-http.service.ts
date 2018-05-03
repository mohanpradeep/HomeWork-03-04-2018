import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { RecipesServiceService } from '../../recipes/recipes-service.service';
import { Recipe } from '../../recipes/recipe.model';

@Injectable()
export class NewDataHttpService {
  constructor( private http: Http, private recipesService: RecipesServiceService) {}

  storeRecipes() {
   return this.http.put('https://recipe-book-c96e5.firebaseio.com/recipes.json', this.recipesService.getrecipelist());
  }

  getRecipes() {
    this.http.get('https://recipe-book-c96e5.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
            this.recipesService.setRecipes(recipes);
        }
      );
  }
}
