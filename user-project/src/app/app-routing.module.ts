import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './items/list-item/list-item.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [ 
  { path:'item', component: ListItemComponent},
  { path:'detail', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ListItemComponent,
  DetailComponent
]
