import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  constructor(
    public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get("http://");
  }

}
