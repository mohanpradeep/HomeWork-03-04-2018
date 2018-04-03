import { Injectable, EventEmitter } from '@angular/core';
import { Ingredinent } from './shoppin.model';

@Injectable()
export class ShoppinListService {

constructor() { }

 newaddshpping = new EventEmitter<Ingredinent[]>();
 private ingredients: Ingredinent[] = [
    new Ingredinent('Apples', 50),
    new Ingredinent('Tomatoes', 5)
 ];

 getshopping(){
   return this.ingredients.slice();
 }
// This is Add New Shopping
 addshoppingservice(ingredients: Ingredinent){
   this.ingredients.push(ingredients);
   this.newaddshpping.emit(this.ingredients.slice());
 }
// This Add New Shopping End...
// This is Recipe List To Add Shopping List
 RecipeToShoppingCat(ingredients: Ingredinent[]){
   this.ingredients.push(...ingredients);
   this.newaddshpping.emit(this.ingredients.slice());
 }
 //This is Recipe List To Add Shopping List End...
}
