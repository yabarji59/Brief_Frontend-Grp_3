import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './items/list-item/list-item.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [ 
  
  { path:'item', component: ListItemComponent},
  { path:'detail', component: DetailComponent},
  { path: '', component: ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ListComponent,
  ListItemComponent,
  DetailComponent
]
