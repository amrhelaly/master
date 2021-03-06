import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the NationalCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-national-card',
  templateUrl: 'national-card.html',
})
export class NationalCardPage {
  cardData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
 
    this.getEmpoyeegetNationalIdCard();

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NationalCardPage');
  }
  getEmpoyeegetNationalIdCard()
  {
    


    try{
      this.ProfileProvider.getEmpoyeegetNationalIdCard()
      
      .then(data => {
       

      this.cardData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }
}
