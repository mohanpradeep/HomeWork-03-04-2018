import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesServiceService } from './recipes/recipes-service.service';
import { TitleCasePipe } from './shared/course-pipes/title-case.pipe';
import { DropdownDirective } from './shared/Course-Directive/dropdown.directive';
import { ShoppinListService } from './shopping-list/shoppin-list.service';
import { RecipesStatComponent } from './recipes/recipes-stat/recipes-stat.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentErrorComponent } from './component-error/component-error.component';
import { NewDataHttpService } from './shared/Data-Service/new-data-http.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    TitleCasePipe,
    DropdownDirective,
    RecipesStatComponent,
    EditRecipeComponent,
    ComponentErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RecipesServiceService, ShoppinListService, NewDataHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
