import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { PayrollProvider } from '../../../providers/payroll/payroll';
import { AppModule } from '../../../app/app.module';
import {BankDetailsPage} from '../bank-details/bank-details';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the BankInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-bank-info',
  templateUrl: 'bank-info.html',
})
export class BankInfoPage {

  businessGroup     :string ;
  banks;
  constructor(public navCtrl: NavController, public navParams: NavParams , public payrollData :PayrollProvider) {

    this.businessGroup     =AppModule.businessGroup; 
    this.getBanksInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankInfoPage');
  }

  getBanksInfo()
  {
    try{
      this.payrollData.getBankInfo()
      
      .then(data => {
        
      this.banks= data;
      
        
      });
    }
    catch (error)
    {
    
      //this.showToast('middle','Connection Problem');
      alert (error);
    }
  }

  async doRefresh(refresher) {
    await this.getBanksInfo();
    refresher.complete();

    }
    bankTapped(event , item)
    {
      this.navCtrl.push(BankDetailsPage, {
        item: item 
       
       
});
    }
}
