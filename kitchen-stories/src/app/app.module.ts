import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BackendMockService } from './shared/services/backend-mock.service';
import { SnacksRecipeComponent } from './snacks-recipe/snacks-recipe.component';
import { NonVegRecipeComponent } from './non-veg-recipe/non-veg-recipe.component';
import { VegRecipeComponent } from './veg-recipe/veg-recipe.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SnacksRecipeComponent, NonVegRecipeComponent, VegRecipeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [BackendMockService],
  bootstrap: [AppComponent],
})
export class AppModule {}
