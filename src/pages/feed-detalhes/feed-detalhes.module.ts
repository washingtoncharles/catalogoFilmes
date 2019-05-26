import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedDetalhesPage } from './feed-detalhes';

@NgModule({
  declarations: [
    FeedDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedDetalhesPage),
  ],
})
export class FeedDetalhesPageModule {}
