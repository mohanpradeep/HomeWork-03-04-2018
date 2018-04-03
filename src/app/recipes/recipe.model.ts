import { Ingredinent } from "../shopping-list/shoppin.model";

export class Recipe {
public name: string;
public description: string;
public imagePath: string;
public ingredients: Ingredinent[]

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredinent[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.ingredients = ingredients;
    }
}
