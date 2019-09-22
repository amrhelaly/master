import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import { HrRequestsPage } from '../hr-requests/hr-requests';
import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';

import { LoadingController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the BusinesscardSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-businesscard-submit',
  templateUrl: 'businesscard-submit.html',
})
export class BusinesscardSubmitPage {


  selectedCardType;
   selecteLanguage;
  englishName;
  arbichName;
  enJobTitle;
  arjobTitle;
  officePhone;
  ext;
  officeFax;
  mobile;
  email;
  approverList;
  constructor(public navCtrl: NavController, public navParams: NavParams,public hrSit: HrSitProvider 
    , public loadingController: LoadingController , public _DomSanitizer: DomSanitizer ,public AlertController :AlertController
  ) {
  
    this.selectedCardType=this.navParams.get('RselectedCardType');
    this.selecteLanguage=this.navParams.get('RselecteLanguage');
    this.englishName=this.navParams.get('RenglishName');
    this.arbichName=this.navParams.get('RarbichName');
    this.enJobTitle=this.navParams.get('RenJobTitle');
    this.arjobTitle=this.navParams.get('RarjobTitle');
    this.officePhone=this.navParams.get('RofficePhone');
    this.ext=this.navParams.get('Rext');
    this.officeFax=this.navParams.get('RofficeFax');
    this.mobile=this.navParams.get('Rmobile');
    this.email=this.navParams.get('Remail');
    this.approverList=this.navParams.get('RapproverList');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinesscardSubmitPage');
  }

  submitRerquest()
  {

  


    
     try{
  
    
   

    this.hrSit.submitBusinessCard('Y',this.selectedCardType.lookup_code,this.selecteLanguage.lookup_code
    ,this.englishName,this.arbichName,this.enJobTitle,this.arjobTitle,this.officePhone,this.ext,this.officeFax,this.mobile,this.email

       ).then(data => { 
          
        
        
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



    
  }
  

}
