import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the LaborCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-labor-card',
  templateUrl: 'labor-card.html',
})
export class LaborCardPage {
  cardData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
  this.getEmpoyeeLaborCardInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaborCardPage');
  }
  getEmpoyeeLaborCardInfo()
  {
    


    try{
      this.ProfileProvider.getEmpoyeeLaborCardInfo()
      
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
