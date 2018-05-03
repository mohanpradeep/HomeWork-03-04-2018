import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppinListService } from './shoppin-list.service';
import { Ingredinent } from './shoppin.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredinent[];
  private subscription: Subscription;

  constructor(private shoppinlist: ShoppinListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinlist.getshopping();
    this.subscription = this.shoppinlist.newaddshpping
    .subscribe(
      (ingredients: Ingredinent[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppinlist.startedEditing.next(index);

  }

}
