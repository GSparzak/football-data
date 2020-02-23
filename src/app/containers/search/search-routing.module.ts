import { Routes, RouterModule } from '@angular/router';
import { SearchParentComponent } from './search-parent/search-parent.component';
import { NgModule } from '@angular/core';

const searchRoutes: Routes = [
  {
    path: '',
    component: SearchParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(searchRoutes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
