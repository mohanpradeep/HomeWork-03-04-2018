import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ShoppinListService } from '../shoppin-list.service';
import { Ingredinent } from '../shoppin.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; 

  constructor(private shoppinlist: ShoppinListService) {}

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountInputRef.nativeElement.value;
    const newIngredit = new Ingredinent(ingName, ingAmout);
    this.shoppinlist.addshoppingservice(newIngredit);
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
}
