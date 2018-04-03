import { Component, OnInit } from '@angular/core';
import { ShoppinListService } from './shoppin-list.service';
import { Ingredinent } from './shoppin.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredinent[];

  constructor(private shoppinlist: ShoppinListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinlist.getshopping();
    this.shoppinlist.newaddshpping
    .subscribe(
      (ingredients: Ingredinent[]) => {
        this.ingredients = ingredients;
      }
  );
  }

}
