import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://arublevsky-001-site1.btempurl.com/';
    public ApiUrl: string = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}