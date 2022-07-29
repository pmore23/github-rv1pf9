import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BreakfastRecipesComponent } from './breakfast-recipes/breakfast-recipes.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'breakfast-recipes', component: BreakfastRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
