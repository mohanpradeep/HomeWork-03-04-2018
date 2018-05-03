import { Component, OnInit } from '@angular/core';
import { NewDataHttpService } from '../shared/Data-Service/new-data-http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private newdataHttpService: NewDataHttpService) { }

  ngOnInit() {
  }
  SaveData() {
   this.newdataHttpService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  FetchData() {
    this.newdataHttpService.getRecipes();
  }
}
