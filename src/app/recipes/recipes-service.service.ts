import { Ingredinent } from './../shopping-list/shoppin.model';
import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppinListService } from '../shopping-list/shoppin-list.service';

@Injectable()
export class RecipesServiceService {
  
 //recipesServiceList = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Blueberries Raspberries',
      'This is simply a test',
      'https://images.pexels.com/photos/87818/background-berries-berry-blackberries-87818.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [
        new Ingredinent('Bluberrines', 10),
        new Ingredinent('Raspberries',5)
      ]),
    new Recipe('Food Dinner Pasta Spaghetti',
      'This is simply a test',
      'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [
        new Ingredinent('Food Dinner', 50),
        new Ingredinent('Past Spaghetti', 30)
      ]
    ),
    new Recipe('Brown Potato',
      'brown potato in front of french fries',
      'https://images.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
      [
        new Ingredinent('Brown', 20),
        new Ingredinent('Potato', 43)
      ]
    ),
  ];

  constructor(private shoppinlist: ShoppinListService) { }

  getrecipelist(){
    return this.recipes;
  }
//This is Add Shopping List
  AddShoppinListIngredinent(ingredients: Ingredinent[]){
    this.shoppinlist.RecipeToShoppingCat(ingredients);
  }
//This is Add Shopping List End

//This is a children Recipes adding
getRecipeDetailRoutingChildren(index: number){
  return this.recipes[index];
}
//This is a Children Recipes adding End
}
