import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SearchComponent } from './search.component';
// import { NewestComponent } from './newest.component';
// import { RandomComponent } from './random.component';
// import { AutocompleteComponent } from './autocomplete.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'search', pathMatch: 'full' },
//   {
//     path: 'search',
//     component: SearchComponent
//   },
//   {
//     path: 'newest',
//     component: NewestComponent
//   },
//   {
//     path: 'random',
//     component: RandomComponent
//   },
//   {
//     path: 'autocomplete',
//     component: AutocompleteComponent
//   }
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
