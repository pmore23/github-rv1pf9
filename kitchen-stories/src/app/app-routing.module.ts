import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SnacksRecipeComponent } from './snacks-recipe/snacks-recipe.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'snacks-recipes', component: SnacksRecipeComponent },
  { path: 'nonveg-recipes', component: SnacksRecipeComponent },
  { path: 'veg-recipes', component: SnacksRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
