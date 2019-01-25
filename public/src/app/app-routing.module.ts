import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PetComponent } from './pet/pet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',component: MainComponent },
  { path: 'new',component: NewComponent },
  { path: ':id/edit',component: EditComponent },
  { path: ':id', component: PetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
