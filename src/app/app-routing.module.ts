import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureDetailComponent } from './adventure/adventure-detail.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adventure', component: AdventureDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
