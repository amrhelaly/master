import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {BusinesscardSubmitPage} from '../businesscard-submit/businesscard-submit';
import { AppModule } from '../../../app/app.module';

import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';
import * as $ from 'jquery';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
/**

/**
 * Generated class for the BusinesscardPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-businesscard-preview',
  templateUrl: 'businesscard-preview.html',
})
export class BusinesscardPreviewPage {

  CardTypes;//
  selectedCardType;
  Languages;//
  filterLanguages;
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


  constructor(public navCtrl: NavController, public navParams: NavParams,public hrSit: HrSitProvider , 
    public loadingController: LoadingController , public AlertController :AlertController
  ) {
  this.getBusinessCardTypes();
  this.getBusinessCardlanguages();
  this.SetDefaultCardData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinesscardPreviewPage');
  }




  getBusinessCardTypes(){
    try{
      this.hrSit.getBusinessCardTypes().then(data => {
        
      this.CardTypes= data;
      
        
      });
    }
    catch (error)
    {
    
    
    }
  }


  getBusinessCardlanguages(){
    try{
      this.hrSit.getBusinessCardLanguages().then(data => {
        
        
      this.Languages=data;
        
      });
    }
    catch (error)
    {
    
     
    }
  }

  SetDefaultCardData(){
    try{
      this.hrSit.getBusinessCardDefaultData().then(data => {
        
     if (data)
     {
      if (data && data[0])
      this.englishName=data[0].full_name;
      this.enJobTitle=data[0].job_title;
      this.officePhone=data[0].phone;
      this.mobile=data[0].mobile;
      this.email=data[0].email_address;
      this.officePhone='043919999';

     }
      
        
      });
    }
    catch (error)
    {
    
      console.log('error');
    }
  }

  previewRequest()
  {

    let error=0;
   
    if (!this.selectedCardType)
     {
       this.showError('CardTypeId');
    error=1;
     }
     else
     {
      this.removeError('CardTypeId');
     }


     if (!this.selecteLanguage)
     {
       this.showError('language');
    error=1;
     }
     else
     {
      this.removeError('language');
     }



     if (!this.englishName)
     {
       this.showError('englishName');
    error=1;
     }
     else
     {
      this.removeError('englishName');
     }



     if (!this.enJobTitle)
     {
       this.showError('enJobTitle');
    error=1;
     }
     else
     {
      this.removeError('enJobTitle');
     }
     
  

     if (!this.officePhone)
     {
       this.showError('officePhone');
    error=1;
     }
     else
     {
      this.removeError('officePhone');
     }


     if (!this.mobile)
     {
       this.showError('mobile');
    error=1;
     }
     else
     {
      this.removeError('mobile');
     }
  
     if (error==1)
    return;
else{


    
     try{
      
    
   

    this.hrSit.submitBusinessCard('W',this.selectedCardType.lookup_code,this.selecteLanguage.lookup_code
    ,this.englishName,this.arbichName,this.enJobTitle,this.arjobTitle,this.officePhone,this.ext,this.officeFax,this.mobile,this.email

       ).then(data => { 
          
        
        
         if (data[0].message=='2')
              {
               
                AppModule.showMessage(this.AlertController, data[0].value);
               
                return;
              }
         else
         {
             
          
          this.navCtrl.push(BusinesscardSubmitPage,
            {
              
                RselectedCardType:this.selectedCardType,
                RselecteLanguage:this.selecteLanguage,
                RenglishName:this.englishName,
                RarbichName:this.arbichName,
                RenJobTitle:this.enJobTitle,
                RarjobTitle:this.arjobTitle,
                RofficePhone:this.officePhone,
                Rext:this.ext,
                RofficeFax:this.officeFax,
                Rmobile:this.mobile,
                Remail:this.email,
                RapproverList:data
            });
        
          }
        });
    
      }catch (err)
      {
        
       
        AppModule.showMessage(this.AlertController, err.message)
      }
      

    }


  }

  showError ( elementId :string)
  {

   var el;
    el=document.getElementsByClassName(elementId)[0];
    $(el).addClass('error-color');

      }

      removeError ( elementId :string)
  {

   var el;
    el=document.getElementsByClassName(elementId)[0];
    $(el).removeClass('error-color');

      }
  
  onChange()
  {
    this.selecteLanguage=null;
    this.filterLanguages = this.Languages.filter((item) => {
      return (item.tag.toLowerCase().indexOf(this.selectedCardType.lookup_code.toLowerCase()) > -1);
    })
  }

}
