import { LogComponent } from './log/log.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TablaComponent } from './tabla/tabla.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListComponent,
  },
  {
    path: 'tabla',
    component: TablaComponent,
  },
  {
    path: 'log',
    component: LogComponent,
  },
  { 
    path: '',
    redirectTo: 'tabla',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
