import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { ControlsComponent } from './controls/controls.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from "./app-routing.module";
import { CatalogComponent } from './catalog/catalog.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LicenseAgreementComponent } from './license-agreement/license-agreement.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,
    BreadCrumbsComponent,
    ControlsComponent,
    LeftMenuComponent,
    ListComponent,
    CatalogComponent,
    UserMenuComponent,
    DashboardComponent,
    UserDashboardComponent,
    UserSettingsComponent,
    SettingsComponent,
    UserRegistrationComponent,
    LicenseAgreementComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
