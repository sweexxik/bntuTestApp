// AOT won't work until this is not fixed
//https://github.com/auth0/angular2-jwt/issues/258

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
// import { AppModuleNgFactory } from '../../aot/angularApp/app/app.module.ngfactory';

enableProdMode();

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);