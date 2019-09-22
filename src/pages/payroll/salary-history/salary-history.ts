import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PayrollProvider } from '../../../providers/payroll/payroll';
import { AppModule } from '../../../app/app.module';

/**
 * Generated class for the SalaryHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-salary-history',
  templateUrl: 'salary-history.html',
})
export class SalaryHistoryPage {
  historyList;
  items = [
    {
      title: 'Courgette daikon',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: '',
      time: {subtitle: '4/16/2013', title: '21:30'}
    }
    // },
    // {
    //   title: 'Courgette daikon',
    //   content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
    //   icon: '',
    //   time: {subtitle: 'January', title: '29'}
    // },
    // {
    //   title: 'Courgette daikon',
    //   content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
    //   icon: '',
    //   time: {title: 'Salary'}
    // }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams , public payrollData:PayrollProvider ) {
    this.getsalaryHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaryHistoryPage');
  }

  getsalaryHistory()
  {
    try{
      this.payrollData.getsalaryHistory()
      
      .then(data => {
        
      this.historyList= data;
      
        
      });
    }
    catch (error)
    {
    
      //this.showToast('middle','Connection Problem');
      alert (error);
    }
  }

}
