import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesServiceService } from '../recipes-service.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;


  constructor(private recipesService: RecipesServiceService,
             private rout: ActivatedRoute,
             private router: Router) {}

  ngOnInit() {
   this.subscription = this.recipesService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes; 
        }
      )
    this.recipes = this.recipesService.getrecipelist();
  }
  addnewrecipe(){
    this.router.navigate(['new'], {relativeTo: this.rout})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
