import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { SummationRequest } from "../classes";

@Injectable()
export class DataService {
    private summationUrl: string;
    private subtractionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.summationUrl = configuration.ServerWithApiUrl + 'summation/';
        this.subtractionUrl = configuration.ServerWithApiUrl + 'subtraction/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getSummationResult = (request: SummationRequest): Observable<Response> => {
        return this.http.post(this.summationUrl, JSON.stringify(request), { headers: this.headers })
            .map(res => res.json());
    }

    // sample http requests
    // public GetAll = (): Observable<any> => {
    //     return this.http.get(this.actionUrl).map((response: Response) => <any>response.json());
    // }
    //
    // public GetSingle = (id: number): Observable<Response> => {
    //     return this.http.get(this.actionUrl + id).map(res => res.json());
    // }
    //
    //
    // public Update = (id: number, itemToUpdate: any): Observable<Response> => {
    //     return this.http
    //         .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
    //         .map(res => res.json());
    // }
    //
    // public Delete = (id: number): Observable<Response> => {
    //     return this.http.delete(this.actionUrl + id);
    // }
}
