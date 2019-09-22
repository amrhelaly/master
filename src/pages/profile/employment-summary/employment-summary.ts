import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the EmploymentSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//declare var bot;
//declare var bot2;
@Component({
  selector: 'page-employment-summary',
  templateUrl: 'employment-summary.html',
})
export class EmploymentSummaryPage {
  empInfo;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController ) {
   // bot.mm();
  // alert(bot);
   //bot.tt();
  // let xx=bot();
   //bot();
  // bot2();

  this.getEmplomentSummary();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmploymentSummaryPage');
  }


  getEmplomentSummary()
  {
    


    try{
      this.ProfileProvider.getEmplomentSummary()
      
      .then(data => {
       
      // if (data)
      this.empInfo= data;
     // this.xx=this.personInfo.date_of_birth;


      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

}
