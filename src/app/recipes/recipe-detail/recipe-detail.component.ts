import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesServiceService } from '../recipes-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  
  constructor(private recipesService: RecipesServiceService,
              private rout: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit() {
    this.rout.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipeDetailRoutingChildren(this.id);
      }
    );
  }
  ToShoppingList(){
    this.recipesService.AddShoppinListIngredinent(this.recipe.ingredients);
  }
  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.rout});

  }
  deleteRecipe(){
  }

}
