import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesServiceService } from '../recipes-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipesService: RecipesServiceService,
             private rout: ActivatedRoute,
             private router: Router) {}

  ngOnInit() {
    this.recipes = this.recipesService.getrecipelist();
  }
  addnewrecipe(){
    this.router.navigate(['new'], {relativeTo: this.rout})
  }
}
