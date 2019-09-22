import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {ThanksCardProvider} from '../../../providers/thanks-card/thanks-card';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
import {ThankscardsHomePage} from '../thankscards-home/thankscards-home';

/**
 * Generated class for the NewCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-new-card',
  templateUrl: 'new-card.html',
})
export class NewCardPage {
  selectedUser;
  title;
  subjectData;
  thanksComments;
  placeHolder ;
  selectedSubject;
  subjectButtons;
  commentsError;
  remaingCardText:string;

  constructor(public navCtrl: NavController, public navParams: NavParams  , public ThanksCardProvider :ThanksCardProvider , public AlertController :AlertController ) {
    this.subjectButtons=[];
    this.selectedUser = this.navParams.get('user');
    this.title='Card to '+this.selectedUser.g;
    this.placeHolder= 'Tell '+ this.selectedUser.g+ ' more';
    this.getSubjects();  
    this.getRemaingCard(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCardPage');
  }

  getSubjects( )
  {
    


    try{
      this.ThanksCardProvider.getSubjectTypes()
      
      .then(data => {
       
       
      this.subjectData= data;

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  subjectTapped(event , subject , selectedindex)
  {
 this.selectedSubject=subject.lookup_code;
  for (let i=0 ; i<this.subjectButtons.length;i++ )
        {
          this.subjectButtons[i]='';
        }
        this.subjectButtons[selectedindex]='seleted-subject';  
  }

  onChange()
  {
 
  }
  
  sendCard()
  {

    if (!this.thanksComments)
    {
    this.commentsError='commentsError';
     return;  
    }
    this.commentsError='';

    try{
      this.ThanksCardProvider.sendCard(this.selectedUser.d , this.selectedSubject , this.thanksComments )
      
      .then(data => {
       
       if (data && data[0].messgae=="2")
       AppModule.showMessage(this.AlertController,data[0].value);
       else
       this.navCtrl.push(ThankscardsHomePage);
     

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }


  }


  getRemaingCard()
  {

  


    try{
      this.ThanksCardProvider.getRemaingCards( )
      
      .then(data => {
       
       if (data && data[0])
      this.remaingCardText= data[0].remaing_card_text;

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }
  
}
