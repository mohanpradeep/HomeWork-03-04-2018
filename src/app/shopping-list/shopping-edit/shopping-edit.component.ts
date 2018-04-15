import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShoppinListService } from '../shoppin-list.service';
import { Ingredinent } from '../shoppin.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;  
  @ViewChild('f') newsubit: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredinent;

  
  constructor(private shoppinlist: ShoppinListService) {}

  ngOnInit() {
    this.subscription = this.shoppinlist.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinlist.getIngredient(index);
        this.newsubit.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredit = new Ingredinent(value.name, value.amount);
        if(this.editMode){
          this.shoppinlist.updateIngredient(this.editedItemIndex, newIngredit)
        }
        else{
          this.shoppinlist.addshoppingservice(newIngredit);
        }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.newsubit.reset();
    this.editMode = false;
  }
  
  onDelete(){
    this.shoppinlist.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
