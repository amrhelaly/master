import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';
import * as $ from 'jquery';
import { HousingSubmitPage } from '../housing-submit/housing-submit';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the HousingPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-housing-preview',
  templateUrl: 'housing-preview.html',
})
export class HousingPreviewPage {

  requestTypes;
  selectedRequestType;
  constructor(public navCtrl: NavController, public navParams: NavParams ,  public hrSit: HrSitProvider 
    , public loadingController: LoadingController,public AlertController :AlertController
  ) {
    this.getpageRequestTypes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousingPreviewPage');
  }


  getpageRequestTypes(){
    try{
      this.hrSit.getHousingRequestTypes().then(data => {
        

        this.requestTypes= data;
      
        
      });
    }
    catch (error)
    {
    
      
    }
  }

  previewHousingRequest()
  {

    if (!this.selectedRequestType)
 {
   this.showError('RequestTypeId');
return;
 }
 else
 {

  /////

  
   try{
  
  
  
  this.hrSit.submitHousing('W'
      ,this.selectedRequestType.meaning ).then(data => { 
        
       
      
       if (data[0].message=='2')
            {
             
          
              AppModule.showMessage(this.AlertController, data[0].value);
              return;
            }
       else
       {
            
        
  this.navCtrl.push(HousingSubmitPage , {RselectedRequestType:this.selectedRequestType.meaning , RapproverList:data})
      
        }
      });
  
    }catch (err)
    {
   
      AppModule.showMessage(this.AlertController, err.message);
    }


  ////
  
 
 }
  }



  showError ( elementId :string)
  {

   var el;
    el=document.getElementsByClassName(elementId)[0];
    $(el).addClass('error-color');

      }


}
