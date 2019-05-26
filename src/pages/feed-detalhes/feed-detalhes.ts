import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed-detalhes',
  templateUrl: 'feed-detalhes.html',
  providers:[
    MovieProvider
  ]
})
export class FeedDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    //console.log('ionViewDidLoad FeedDetalhesPage');
    this.filmeid = this.navParams.get("id");
    //console.log("id recebido: " + this.filmeid);
    this.movieProvider.getMovieDetalhes(this.filmeid).subscribe(
      data =>{
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);

    }, error =>{
      console.log(error);

    })
  }

}
