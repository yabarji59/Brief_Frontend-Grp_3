import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListItemComponent } from './items/list-item/list-item.component';
import { RouterModule, Routes } from '@angular/router';
//TODO : clean for production and put routes in appropriate component class
const appRoutes:Routes = [
  { path: 'list',component: ListItemComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
