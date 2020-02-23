import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchParentComponent } from './search-parent/search-parent.component';



@NgModule({
  declarations: [SearchParentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
  ],
  entryComponents: [SearchParentComponent]
})
export class SearchModule { }
