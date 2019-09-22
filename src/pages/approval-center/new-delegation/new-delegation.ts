import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { WorkListNtfProvider}  from '../../../providers/work-list-ntf/work-list-ntf'; 
import { AppModule } from '../../../app/app.module';
import { EmployeesPage } from '../../shared-pages/employees/employees';
import { ModalController } from 'ionic-angular';
import { DelegationHomePage } from '../delegation-home/delegation-home';
import * as $ from 'jquery';
/**
 * Generated class for the NewDelegationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-delegation',
  templateUrl: 'new-delegation.html',
})
export class NewDelegationPage {
mode:string;
  title;
  delegationTypes;
  delegatePerson;
  selectedPersonArgument;
  itemType;
  ruleId;
  disableUpdate :boolean=true;
  errorFound :boolean=false;

  selecteditemType;
  selectedreplacedPesonName ='Choose Person';
  dateFrom  :Date;
  dateTo :Date;
  comments : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private WorkListNtfProvider:WorkListNtfProvider
    , private modalCtrl:ModalController,private AlertController :AlertController) {
  
  this.mode= this.navParams.get('mode');
  if(!this.mode)
  {
    this.mode='new';
    this.title='New Delegation';
    this.getDelegationTypes();
  }
  else
  {
      this.title='Edit Delegation';
     
      this.itemType=this.navParams.get('itemType');
 
      let dateFrom=this.navParams.get('dateFrom');
   
      this.dateFrom=dateFrom;

      let dateTo=this.navParams.get('dateTo');

      this.dateTo=dateTo; 

      this.selectedreplacedPesonName=this.navParams.get('personDisplayName');
      this.selectedPersonArgument=this.navParams.get('personName');

      this.comments=this.navParams.get('comments');
      this.ruleId=this.navParams.get('ruleId');



  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewDelegationPage');
  }
  getDelegationTypes()
  {
    try{
      this.WorkListNtfProvider.getDelegationTypes().then(data => {
        
      this.delegationTypes= data;
   
        
      });
    }
    catch (error)
    {

      alert (error);
    }
  }
  personTapped()
  {

    let modalAction = this.modalCtrl.create(EmployeesPage, {title : 'Delegate to' , 
                callingType:1  } );
  modalAction.onDidDismiss(data => {
                  if (data)
                  {
                  this.delegatePerson=data.user;
                  this.selectedreplacedPesonName=this.delegatePerson.g;
                  this.selectedPersonArgument=this.delegatePerson.m;
                  this.disableUpdate=false;
                  
                  }
                });
    modalAction.present();
  }

  saveRquest()
  {
    try{
      let error=0;
      if (!this.selecteditemType)
       {
      
      this.showErrorMessage('delegation-type');
      error=1;
       }
       if (this.selectedreplacedPesonName=='Choose Person')
       {
      
      this.showErrorMessage('selected-person');
      error=1;
       }
       if (!this.dateFrom)
       {
      
      this.showErrorMessage('date-from');
      error=1;
       }
       if (!this.dateTo)
       {
      
      this.showErrorMessage('date-to');
      error=1;
       }

       if (error==1)
       return;
       if (this.errorFound)
       return;
       



      this.WorkListNtfProvider.addVactionRule( this.dateFrom , this.dateTo , this.selecteditemType.name ,
                                                 this.delegatePerson.m , this.comments ).then(data => { 
            
           // console.log(data);
          
           if (data[0].message=='2')
                {
                 
                  AppModule.showMessage(this.AlertController, data[0].value);
                  return;
                }
           else
           {
                  
           this.navCtrl.push(DelegationHomePage);
         
          
            }
          });

     }catch(err)
     {
      AppModule.showMessage(this.AlertController, err.message);

  }
}



deleteRequest ()
{

  let confirm = this.AlertController.create({
    title: null,
    message: 'Do you want to delete this Rule?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'delete',
        handler: () => {
                  try {

              this.WorkListNtfProvider.deleteVacationRule( this.ruleId ).then(data => { 


                              if (data[0].message=='2')
                              {

                              AppModule.showMessage(this.AlertController, data[0].value);
                              return;
                              }
                              else
                              {

                              this.navCtrl.push(DelegationHomePage);


                              }
                              });

                              }catch(err)
                              {
                              AppModule.showMessage(this.AlertController, err.message);

                              }
           
        }
      }
    ]
  });
  confirm.present();

}

updateRquest()
{
  try{
    let error=0;

     if (this.selectedreplacedPesonName=='Choose Person')
     {
    
    this.showErrorMessage('selected-person');
    error=1;
     }
     if (!this.dateFrom)
     {
    
    this.showErrorMessage('date-from');
    error=1;
     }
     if (!this.dateTo)
     {
    
    this.showErrorMessage('date-to');
    error=1;
     }

     if (error==1)
     return;



    this.WorkListNtfProvider.updateVactionRule( this.ruleId,this.dateFrom , this.dateTo , 
                                               this.selectedPersonArgument, this.comments ).then(data => { 
          
      
        
         if (data[0].message=='2')
              {
               
                AppModule.showMessage(this.AlertController, data[0].value);
                return;
              }
         else
         {
                
         this.navCtrl.push(DelegationHomePage);
       
        
          }
        });

   }catch(err)
   {
   
    AppModule.showMessage(this.AlertController, err.message);

    }

}


showErrorMessage ( elementId :string)
 {
 var x;
   x=document.getElementById(elementId);
   $(x).addClass('error-color');
}

removeErrorMessage ( elementId :string)
 {
 var x;
   x=document.getElementById(elementId);
   $(x).removeClass('error-color');
}

onChange()
{
 this.disableUpdate=false;
}

onckeckDate()
{
 
  this.disableUpdate=false;
if (this.dateFrom && this.dateTo)
{
 
 if (this.dateFrom>this.dateTo)
 {
  this.showErrorMessage('date-from');
  this.showErrorMessage('date-to');
 this.disableUpdate=true;
 this.errorFound=true;

 }
 else
 {
  this.errorFound=false;
  this.removeErrorMessage('date-from');
  this.removeErrorMessage('date-to');
 }
}

}
  
}
