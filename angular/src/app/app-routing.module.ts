import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {CatalogComponent} from "./catalog/catalog.component";


const ROUTES = [
  {path: '', component: CatalogComponent},
  {path: '', component: CatalogComponent},

  {path: '**', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


