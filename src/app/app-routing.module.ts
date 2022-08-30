import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'phrases', component: PhrasesListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
