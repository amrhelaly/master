import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the EmployeeVisaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employee-visa',
  templateUrl: 'employee-visa.html',
})
export class EmployeeVisaPage {
  visaData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
 this.getVisaData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeVisaPage');
  }

  getVisaData()
  {
    


    try{
      this.ProfileProvider.getEmployeeVisa()
      
      .then(data => {
       

      this.visaData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

}
