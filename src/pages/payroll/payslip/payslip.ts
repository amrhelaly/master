import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { PayrollProvider } from '../../../providers/payroll/payroll';
import { AppModule } from '../../../app/app.module';
import {PayslipDetailsPage} from '../payslip-details/payslip-details';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the PayslipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-payslip',
  templateUrl: 'payslip.html',
})
export class PayslipPage {

 
  businessGroup     :string ;
  payrollList;
  payrollListAll;
  fromR=0;
  v_step=12;
  toR=this.v_step;
  constructor(public navCtrl: NavController, public navParams: NavParams , public payrollData: PayrollProvider ,
     public loadingController: LoadingController ,  public AlertController :AlertController
    ) {

    this.businessGroup     =AppModule.businessGroup; 
    this.getPayslipList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayslipPage');
  }

  getPayslipList()
  {
    try{
      this.payrollData.getPayslipList()
      
      .then(data => {
        
      this.payrollListAll= data;
      if (this.payrollListAll)
      {
      this.payrollList=this.payrollListAll.slice(this.fromR,this.toR);
      }
      });
    }
    catch (error)
    {
    
      
      AppModule.showMessage(this.AlertController,"error");
    }
  }


 


  
  async getSelectedEarnings(actionContextid :string)
  {
    return new Promise(resolve => {
      this.payrollData.getPayrollEarnings(actionContextid)
      
      .then(data => {
        
      
        resolve(data)
      
        
      }
      ,err=>
      {
        resolve(); 
      }
    );
    });
  }

  

  async getSelectedDeduction(actionContextid :string)
  {
    
    return new Promise(resolve => {
      this.payrollData.getPayrollDeductions(actionContextid)
      
      .then(data => {
      
        
      resolve(data)
      
  
        
      }
    ,err=>
    {
      resolve();
    }
    );
    });
    
    
  }

  async doRefresh(refresher) {
    this.toR=this.v_step;
    await this.getPayslipList();
    refresher.complete();

    }

   async payslipTapped(event, item)
    {

     if (item==null)
     return;

      

      let earning ;
     let deduction;

    
     try
     {  
     earning = await this.getSelectedEarnings(item.action_context_id);
      // console.log (earning)
    deduction = await this.getSelectedDeduction(item.action_context_id);
     }
     catch (err)
     {
       //alert ('dddd');
       AppModule.showMessage(this.AlertController,"error");
     }
   
    
      this.navCtrl.push(PayslipDetailsPage, {
        item: item ,
        earning : earning,
        deduction : deduction
       
});
    }

    doInfinite(infiniteScroll) {


      // this.fromR=this.fromR+this.v_step;
       this.toR=this.toR+this.v_step;
   
   
       try{
   
         
           
         if(this.payrollListAll)
         this.payrollList=(this.payrollListAll.slice(0 ,this.toR));
         
         infiniteScroll.complete();
     }
       catch (err)
       {
         
       }
       console.log(' infiniteScroll has ended');
     }

}
