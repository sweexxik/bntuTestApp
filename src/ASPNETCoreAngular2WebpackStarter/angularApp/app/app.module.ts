import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
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
import { ProfileEdit } from "./components/profile/profile_edit.component";
import { ProfileShow } from "./components/profile/profile_show.component";
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        ToasterModule,
        FormsModule,
        SlimLoadingBarModule.forRoot()
    ],

    declarations: [
        AppComponent,
        ProfileComponent,
        ProfileEdit,
        ProfileShow,
        HomeComponent,
        AboutComponent,
        FooterComponent,
        NavigationComponent
    ],

    providers: [
        Configuration,
        DataService,
        AUTH_PROVIDERS
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
