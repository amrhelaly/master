import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {HrRequestsPage} from '../hr-requests/hr-requests';
import {DomSanitizer} from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';
import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the HousingSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-housing-submit',
  templateUrl: 'housing-submit.html',
})
export class HousingSubmitPage {

  selectedRequestType;
  approverList;
  constructor(public navCtrl: NavController, public navParams: NavParams , public _DomSanitizer: DomSanitizer 
    ,  public hrSit: HrSitProvider , public loadingController: LoadingController , public AlertController :AlertController ) {
    this.selectedRequestType=this.navParams.get('RselectedRequestType');
    this.approverList=this.navParams.get('RapproverList');
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousingSubmitPage');
  }
  submitRerquest()
  {
    ////

    
     try{
  
    
    
    this.hrSit.submitHousing('Y'
        ,this.selectedRequestType).then(data => { 
          
       
        
         if (data[0].message=='2')
              {
               
                AppModule.showMessage(this.AlertController, data[0].value);
                return;
              }
         else
         {
        
          
          this.navCtrl.push(HrRequestsPage);
        
          }
        });
    
      }catch (err)
      {
      
        AppModule.showMessage(this.AlertController, err.message);
      }
  

    ///


  }

}
