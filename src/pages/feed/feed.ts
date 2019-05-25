import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
      //duration: 3000 //tempo em milissegundos
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }


  ionViewDidEnter() {
    //console.log('ionViewDidLoad FeedPage');
    this.abreCarregando();
    this.movieProvider.getPopularMovies().subscribe(
      data => {

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
        this.fechaCarregando();
      }, error => {
        console.log(error);
        this.fechaCarregando();
      })
  }

}
