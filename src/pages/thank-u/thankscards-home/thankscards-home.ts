import { Component , ViewChild } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {ThanksCardsPage} from '../thanks-cards/thanks-cards';
import {LeaderBoardPage} from '../leader-board/leader-board';
import { StartPage } from '../../shared-pages/start/start';
import { Navbar } from 'ionic-angular';
/**
 * Generated class for the ThankscardsHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-thankscards-home',
  templateUrl: 'thankscards-home.html',
})
export class ThankscardsHomePage {

  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad ThankscardsHomePage');
  }

  setBackButtonAction(){
    this.Navbar.backButtonClick = () => {
     
      this.navCtrl.push(StartPage);
   

    
     }
    }

    openGivenCards()
    {
this.navCtrl.push(ThanksCardsPage , {title :'Given Cards' ,  cardType :'Given'});
    }

    openReceivedCards()
    {
this.navCtrl.push(ThanksCardsPage, {title :'Received Cards', cardType :'Received'});
    }

    openLeaderBoard()
    {
this.navCtrl.push(LeaderBoardPage);
    }

}
