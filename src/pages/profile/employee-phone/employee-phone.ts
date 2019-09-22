import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the EmployeePhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employee-phone',
  templateUrl: 'employee-phone.html',
})
export class EmployeePhonePage {
  phonesData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
  this.getPhonesData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePhonePage');
  }

  getPhonesData()
  {
    


    try{
      this.ProfileProvider.getEmplomenyeePhones()
      
      .then(data => {
       

      this.phonesData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

}
