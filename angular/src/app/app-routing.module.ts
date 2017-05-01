import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {CatalogComponent} from "./catalog/catalog.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {UserSettingsComponent} from "./user-settings/user-settings.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {GoodComponent} from "./good/good.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";


const ROUTES = [
  {path: '', component: CatalogComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'goods/:idCategory', component: CatalogComponent},
  {path: 'user-dashboard/:user_id', component: UserDashboardComponent},
  {path: 'user-settings', component: UserSettingsComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {path: 'user-profile/:id', component: UserProfileComponent},
  {path: 'good/:id', component: GoodComponent},
    
  {path: '**', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


