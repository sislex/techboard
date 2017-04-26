import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {CatalogComponent} from "./catalog/catalog.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";


const ROUTES = [
  {path: '', component: CatalogComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'user-settings', component: UserSettingsComponent},
  {path: 'user-registration', component: UserRegistrationComponent},

  {path: '**', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


