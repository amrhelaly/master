import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {ThanksCardProvider} from '../../../providers/thanks-card/thanks-card';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import {ThanksCardsPage} from '../thanks-cards/thanks-cards';
/**
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-leader-board',
  templateUrl: 'leader-board.html',
})
export class LeaderBoardPage {

  boardData;
 boardDataAll;
  fromR=0;
  v_step=10;
  toR=this.v_step;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ThanksCardProvider :ThanksCardProvider , public AlertController :AlertController ,  private sanitized: DomSanitizer) {
  
  this.getLeaderBoard();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');
  }


  getLeaderBoard()
  {
    


    try{
      this.ThanksCardProvider.getLeaderBoard()
      
      .then(data => {
       
       
      this.boardDataAll= data;
      if (this.boardDataAll)
      this.boardData=(this.boardDataAll.slice(0 ,this.toR));

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  cardTapped(event ,card)
  {
this.navCtrl.push(ThanksCardsPage , {cardType : 'Received' , title :'Cards For '+card.full_name , personId:card.person_id} );
  }


  async doRefresh(refresher) {
    this.toR=this.v_step;
    await this.getLeaderBoard();
    refresher.complete();

    }

    doInfinite(infiniteScroll) {


       this.toR=this.toR+this.v_step;
   
   
       try{
   
         
           
         if (this.boardDataAll)
         this.boardData=(this.boardDataAll.slice(0 ,this.toR));
         
         infiniteScroll.complete();
     }
       catch (err)
       {
         
       }
       console.log(' infiniteScroll has ended');
     }

}
