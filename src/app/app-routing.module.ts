import { SearchParentComponent } from './containers/search/search-parent/search-parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentMatchesComponent } from './containers/current-matches/current-matches.component';


const routes: Routes = [
  {
    path: 'search',
    // loadChildren: () => import('./containers/search/search.module').then(module => module.SearchModule)
    component: SearchParentComponent
  },
  {
    path: '',
    component: CurrentMatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
