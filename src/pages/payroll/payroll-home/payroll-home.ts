import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { Navbar } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { StartPage } from '../../shared-pages/start/start';
import { PayslipPage } from '../payslip/payslip';
import { BankInfoPage } from '../bank-info/bank-info';
import { SalaryHistoryPage } from '../salary-history/salary-history';
/**
 * Generated class for the PayrollHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-payroll-home',
  templateUrl: 'payroll-home.html',
})
export class PayrollHomePage {

  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayrollHomePage');
    this.setBackButtonAction();
  }
  setBackButtonAction(){
    this.Navbar.backButtonClick = () => {
     
      this.navCtrl.push(StartPage);
   

    
     }
    }
    goPaySlipPage()
    {
this.navCtrl.push(PayslipPage);
    }

goBankInfoPage()
{
  this.navCtrl.push(BankInfoPage);
}
goSalaryHistory()
{
  this.navCtrl.push(SalaryHistoryPage);
}
}
