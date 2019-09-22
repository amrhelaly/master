import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {HrRequestsPage} from '../hr-requests/hr-requests';
import { AppModule } from '../../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {HrSitProvider} from '../../../providers/hr-sit/hr-sit';
import {DomSanitizer} from '@angular/platform-browser';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the LettersSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-letters-submit',
  templateUrl: 'letters-submit.html',
})
export class LettersSubmitPage {
  selectedLetterType;
  selectedTecomUpdateSalaryType;
  TravelDestination;
  cbt;
  cb;
  lt1;
  lt2;
  approverList;

  businessGroup;

  UAEsegmnets  :boolean=false;
  KSAsegments  :boolean=false;
  otherSegmnts :boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public loadingController: LoadingController 
              , public hrSit: HrSitProvider , public _DomSanitizer: DomSanitizer,public AlertController :AlertController ) {

    
    
    this.selectedLetterType=this.navParams.get('RselectedLetterType');
    this.selectedTecomUpdateSalaryType=this.navParams.get('RselectedTecomUpdateSalaryType');;
    this.TravelDestination=this.navParams.get('RTravelDestination');
    this.cbt=this.navParams.get('Rcbt');
    this.cb=this.navParams.get('Rcb');
    this.lt1=this.navParams.get('Rlt1');
    this.lt2=this.navParams.get('Rlt2');
    this.approverList=this.navParams.get('RapproverList');


    
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
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LettersSubmitPage');
  }

  submitRerquest()
  {

    
     try{
   


      this.hrSit.submitLetter('Y'
          ,this.selectedLetterType.letter_code,this.cbt,this.TravelDestination,this.selectedTecomUpdateSalaryType , this.lt1 ,this.lt2 ,this.cb).then(data => { 
            
           
          
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

     }catch(err)
     {
      AppModule.showMessage(this.AlertController, err.message);
     }

   

  }

}
