import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = (process.env.NODE_ENV || "development").trim() === 'development' ? 'localhost:3000' : 'http://arublevsky-001-site1.btempurl.com';
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}