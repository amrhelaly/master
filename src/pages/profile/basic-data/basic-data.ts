import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BasicDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-basic-data',
  templateUrl: 'basic-data.html',
})
export class BasicDataPage {
personInfo;
xx

  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController ,  private sanitized: DomSanitizer) {
  this.getPerssonalInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicDataPage');
  }

  getPerssonalInfo()
  {
    


    try{
      this.ProfileProvider.getPerssonalInfo()
      
      .then(data => {
       
      // if (data)
      this.personInfo= data;
     // this.xx=this.personInfo.date_of_birth;
 //console.log(this.personInfo)

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }



}
