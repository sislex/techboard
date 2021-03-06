import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {BreadCrumbsComponent} from './bread-crumbs/bread-crumbs.component';
import {ControlsComponent} from './controls/controls.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {ListComponent} from './list/list.component';
import {AppRoutingModule} from "./app-routing.module";
import {CatalogComponent} from './catalog/catalog.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {UserSettingsComponent} from './user-settings/user-settings.component';
import {SettingsComponent} from './settings/settings.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {LicenseAgreementComponent} from './license-agreement/license-agreement.component';
import {RegistrationComponent} from './registration/registration.component';
import {GoodComponent} from './good/good.component';
import {CatalogService} from "./services/catalog.service";
import {GoodsService} from "./services/goods.service";
import {RequestsService} from "./services/requests.service";
import {GoodService} from "./services/good.service";
import {DashboardService} from "./services/dashboard.service";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileService} from "./services/profile.service";
import { EditingAnAdComponent } from './editing-an-ad/editing-an-ad.component';
import { UserEditingAnAdComponent } from './user-editing-an-ad/user-editing-an-ad.component';

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
        RegistrationComponent,
        GoodComponent,
        UserProfileComponent,
        ProfileComponent,
        EditingAnAdComponent,
        UserEditingAnAdComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule,
        AppRoutingModule
    ],
    providers: [
        CatalogService,
        GoodsService,
        RequestsService,
        GoodService,
        DashboardService,
        ProfileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
