import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the PayslipDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-payslip-details',
  templateUrl: 'payslip-details.html',
})
export class PayslipDetailsPage {

  title :string ;
  selectedPaySlip ;
  earning;
  deduction;
  payslip: string = "Summary";
  totalEarning :number=0;;
  totalDeduction :number=0;
  totalEarning_txt='0';
  totalDeduction_txt='0';
  currency :string;


  netPay :number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams , private decimalPipe: DecimalPipe) {
   try{
    this.selectedPaySlip=this.navParams.get('item');
    this.title=this.selectedPaySlip.payslip_txt;

    this.earning=this.navParams.get('earning');
    this.deduction=this.navParams.get('deduction');

    if (this.earning && this.earning[0] && this.earning[0].total_value)
    {
    this.totalEarning=this.earning[0].total_value;
    this.currency=this.earning[0].currency;
    //this.totalEarning_txt=this.earning[0].total_value_txt;
    }
    
     
    if (this.deduction && this.deduction[0] && this.deduction[0].total_value)
    {
    this.totalDeduction=this.deduction[0].total_value;
    //this.totalDeduction_txt=this.earning[0].total_value_txt;
    }
    
    this.netPay=this.totalEarning-this.totalDeduction;
    

   }


   catch (err)
   {

   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayslipDetailsPage');
  }

  twoDecimals(number) {
    return this.decimalPipe.transform(number, '1.2-2');
}

}
