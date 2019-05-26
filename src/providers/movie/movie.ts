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

  private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiKey = "XXX";

  constructor(
    public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=" + this.baseApiKey);
  }

  getPopularMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.baseApiKey);
  }

  getMovieDetalhes(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.baseApiKey);
  }
}
