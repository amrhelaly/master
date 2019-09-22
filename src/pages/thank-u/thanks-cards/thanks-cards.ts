import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {ThanksCardProvider} from '../../../providers/thanks-card/thanks-card';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import {NewCardPage} from '../new-card/new-card';
import { ModalController } from 'ionic-angular';
import { EmployeesPage } from '../../shared-pages/employees/employees';

/**
 * Generated class for the ThanksCardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-thanks-cards',
  templateUrl: 'thanks-cards.html',
})
export class ThanksCardsPage {
  title :string;
  cardData;
  cardDataAll;
 
  cardType;
  showAdd : boolean=false;
  disableAdd : boolean=true;
  fromR=0;
  v_step=10;
  toR=this.v_step;

  constructor(public navCtrl: NavController, public navParams: NavParams 
      , public ThanksCardProvider :ThanksCardProvider , public AlertController :AlertController 
      ,  private sanitized: DomSanitizer  ,public modalCtrl: ModalController) {
    this.title = this.navParams.get('title');
    this.cardType = this.navParams.get('cardType');
    if (this.cardType=='Given')
    this.showAdd=true;


    this.getCards(this.cardType);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThanksCardsPage');
  }


  getCards( cardtype :string)
  {
    


    try{
      this.ThanksCardProvider.getCards( cardtype )
      
      .then(data => {
       
       
      this.cardDataAll= data;
      if (this.cardDataAll)
      this.cardData=this.cardDataAll.slice(this.fromR,this.toR);

      // handel add Button
      if (this.showAdd)
      {
        if (this.cardData && this.cardData.length>0)
        {
          if (this.cardData[0].adding_state && this.cardData[0].adding_state.toLowerCase()=='success')
          {
            this.disableAdd=false;
          }
        }

        if (this.cardData && this.cardData.length==0)
        {
          this.disableAdd=false;
        }
      }

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  newCard()
  {
  

    // try{
    //   this.ThanksCardProvider.checkAddCard( this.personId )
      
    //   .then(data => {
       
    //    if(data && data[0].message=='2')   // user couldn't add
    //    {
    //     AppModule.showMessage(this.AlertController,data[0].value)
    //    } 
    //    else  // user could add
    //    {
    //     this.navCtrl.push(NotificationActionsPage , {callingType: 3 ,title: 'Choose Person to Thank'});
    //    }
      

    //   });
    // }
    // catch (error)
    // {
     
    //   AppModule.showMessage(this.AlertController,'Error:'+error)
      
    // }


    //  
    this.navCtrl.push(EmployeesPage , {callingType: 3 ,title: 'Choose Person to Thank'});

  
  }

  async doRefresh(refresher) {
    this.toR=this.v_step;
    await this.getCards(this.cardType);
    refresher.complete();

    }

    doInfinite(infiniteScroll) {


       this.toR=this.toR+this.v_step;
   
   
       try{
   
         
           
         if (this.cardDataAll)
         this.cardData=(this.cardDataAll.slice(0 ,this.toR));
         
         infiniteScroll.complete();
     }
       catch (err)
       {
         
       }
       console.log(' infiniteScroll has ended');
     }
  
}
