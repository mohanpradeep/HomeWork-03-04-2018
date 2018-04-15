import { Injectable, EventEmitter } from '@angular/core';
import { Ingredinent } from './shoppin.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppinListService {

constructor() { }

 newaddshpping = new Subject<Ingredinent[]>();
  startedEditing = new Subject<number>();
 
 private ingredients: Ingredinent[] = [
    new Ingredinent('Apples', 50),
    new Ingredinent('Tomatoes', 5)
 ];

 getshopping(){
   return this.ingredients.slice();
 }

 getIngredient(index: number){
   return this.ingredients[index];
 }
updateIngredient(index: number, newIngredient: Ingredinent){
  this.ingredients[index] = newIngredient;
  this.newaddshpping.next(this.ingredients.slice());
}
deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.newaddshpping.next(this.ingredients.slice());
}

// This is Add New Shopping
 addshoppingservice(ingredients: Ingredinent){
   this.ingredients.push(ingredients);
   this.newaddshpping.next(this.ingredients.slice());
 }
// This Add New Shopping End...
// This is Recipe List To Add Shopping List
 RecipeToShoppingCat(ingredients: Ingredinent[]){
   this.ingredients.push(...ingredients);
   this.newaddshpping.next(this.ingredients.slice());
 }
 //This is Recipe List To Add Shopping List End...
}
