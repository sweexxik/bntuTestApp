import { enableProdMode } from "@angular/core";
export * from '../polyfills';
export * from '../vendor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import '../styles/custom.css';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map