import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the EmployeePassportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employee-passport',
  templateUrl: 'employee-passport.html',
})
export class EmployeePassportPage {
  passportData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
 this.getPassportData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePassportPage');
  }
  getPassportData()
  {
    


    try{
      this.ProfileProvider.getEmplomenyeePassportInfo()
      
      .then(data => {
       

      this.passportData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }


}
