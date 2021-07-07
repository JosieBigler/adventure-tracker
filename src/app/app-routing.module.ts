import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureDetailComponent } from './adventure/adventure-detail.component';
import { HomeComponent } from './home.component';
import { NpcDetailComponent } from './npc/npc-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adventure/:id', component: AdventureDetailComponent,},
  {path: 'npc/:id', component: NpcDetailComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
