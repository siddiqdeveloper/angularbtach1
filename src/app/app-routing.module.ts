import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourceComponent } from './add-cource/add-cource.component';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
{
  path:'home/:id',
  component:HomeComponent
},
 {
  path:'add-course',
  component:AddCourceComponent
},
{
  path:'list',
  component:ListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
