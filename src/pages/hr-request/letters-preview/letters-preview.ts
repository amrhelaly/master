import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import { LettersSubmitPage } from '../letters-submit/letters-submit';
import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';
import * as $ from 'jquery';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the LettersPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-letters-preview',
  templateUrl: 'letters-preview.html',
})
export class LettersPreviewPage { 

  letterTypes;
  selectedLetterType;
  tecomUpdateSalaryTypes;
  selectedTecomUpdateSalaryType;
  TravelDestination;
  cbt;
  cb;
  lt1;
  lt2;
  businessGroup;

  UAEsegmnets  :boolean=false;
  KSAsegments  :boolean=false;
  otherSegmnts :boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams , public hrSit: HrSitProvider 
    , public loadingController: LoadingController,public AlertController :AlertController) {
   // AppModule.businessGroup=997;
    this.businessGroup=AppModule.businessGroup;
    if (this.businessGroup)
    {
          if ( this.businessGroup=='81')
          {
            this.UAEsegmnets=true;
          }

          else if ( this.businessGroup=='998')
          {
            this.KSAsegments=true;
          }

          else 
          {
            this.otherSegmnts=true;
          }
    }

    this.getpageLettersTypes();

    if (this.businessGroup && this.businessGroup=='81')
    {
this.getTecomSalatUpdateTypes();
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LettersPreviewPage');
  }


  getpageLettersTypes(){
  try{
  
    this.hrSit.getLettersTypes().then(data => {
      
    this.letterTypes= data;
    
      
    });
  }
  catch (error)
  {
  
    
  }
}


getTecomSalatUpdateTypes(){
  try{
    this.hrSit.getSalaryUpdateTypes().then(data => {
      
    this.tecomUpdateSalaryTypes= data;
    
      
    });
  }
  catch (error)
  {
  
    
  }
}


previewLetterRequest()
{

let error=0;
if (!this.selectedLetterType)
 {
   this.showError('letterTypeId');
error=1;
 }
 else
 {
  this.removeError('letterTypeId');
 }

 // check uae 
 if (this.UAEsegmnets)
 {

            if (!this.cbt)
            {
              this.showError('cbt');
             error=1;
            }
            else
            {
              this.removeError('cbt');
            }

}
// check KSA
if (this.KSAsegments)
{

           if (!this.lt1)
           {
             this.showError('lt1');
            error=1;
           }
           else
           {
             this.removeError('lt1');
           }

}


// check others
if (this.otherSegmnts)
{

  if (!this.cb)
  {
    this.showError('cb');
   error=1;
  }
  else
  {
    this.removeError('cb');
  }

}


 if (error==1)
 return;
 else
{
let selectedTecomUpdateSalary;
 if (this.selectedTecomUpdateSalaryType)
{
  selectedTecomUpdateSalary=this.selectedTecomUpdateSalaryType.flex_value;
}




 try{

 

this.hrSit.submitLetter('W'
    ,this.selectedLetterType.letter_code,this.cbt,this.TravelDestination,selectedTecomUpdateSalary , this.lt1 ,this.lt2 ,this.cb).then(data => { 
      
    

     if (data[0].message=='2')
          {
           
           
            AppModule.showMessage(this.AlertController, data[0].value);
            return;
          }
     else
     {
            
      this.navCtrl.push(LettersSubmitPage , {
                  RselectedLetterType:this.selectedLetterType,
                  RselectedTecomUpdateSalaryType:selectedTecomUpdateSalary,
                  RTravelDestination:this.TravelDestination,
                  Rcbt:this.cbt,
                  Rcb:this.cb,
                  Rlt1:this.lt1,
                  Rlt2:this.lt2,
                RapproverList:data});
    
      }
    });

  }catch (err)
  {
   
    AppModule.showMessage(this.AlertController, err.message);
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




}
