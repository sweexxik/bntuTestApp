import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import {routing, appRoutingProviders} from './app.routes';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataService } from './services/DataService';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileEdit } from "./components/profile/profile-edit.component";
import { ProfileShow } from "./components/profile/profile-show.component";
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SummationComponent } from "./components/dashboard/summation/summation.component";
import { DashboardMainComponent } from "./components/dashboard/main/dashboard-main.component";
import { SubtractionComponent } from "./components/dashboard/subtraction/subtraction.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UnauthorizedComponent } from "./components/page-not-found/unauthorized.component";
import { AuthService } from "./auth/auth.service";
import { LoginComponent } from "./components/login/login.component";
import { MultiplicationComponent } from "./components/dashboard/multiplication/multiplication.component";
import { TranslateModule } from 'ng2-translate';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ToasterModule,
        FormsModule,
        SlimLoadingBarModule.forRoot(),
        TranslateModule.forRoot()
    ],

    declarations: [
        AppComponent,
        ProfileComponent,
        ProfileEdit,
        ProfileShow,
        HomeComponent,
        AboutComponent,
        FooterComponent,
        NavigationComponent,
        DashboardComponent,
        DashboardMainComponent,
        SummationComponent,
        SubtractionComponent,
        PageNotFoundComponent,
        AdminComponent,
        UnauthorizedComponent,
        LoginComponent,
        MultiplicationComponent
    ],

    providers: [
        Configuration,
        DataService,
        AuthService,
        AUTH_PROVIDERS,
        appRoutingProviders
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
