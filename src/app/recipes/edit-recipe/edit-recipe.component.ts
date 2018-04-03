import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.params
      .subscribe(
        (params: Params) =>{
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

}
