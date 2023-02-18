import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "home", component: HomeContainerComponent,
  children: [{ path: "", component: HomeComponent }, { path: "about", component: AboutComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
