import { Component ,ViewChild} from '@angular/core';
import  {NavController, NavParams,ModalController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { WorkListPage } from '../../approval-center/work-list/work-list';
import { MorePage } from '../more/more';
import { ProfileHomePage } from '../../profile/profile-home/profile-home';

import { AppModule } from '../../../app/app.module';
import {Tabs} from 'ionic-angular';
import {Content} from 'ionic-angular';
import { trigger, transition, style, state, animate, keyframes } from '@angular/core';
import {SocialProvider} from '../../../providers/social/social';
import * as $ from 'jquery';
import { Platform } from 'ionic-angular';

 
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
  animations: [
    trigger('visibilityChanged', [
      state('false', style({ opacity: '1' })),
      state('true', style({ opacity: '0'  })),
      transition('true => *', animate('3s')), // open
      transition('false => *', animate('3s'))
    ])
    ,
    trigger('mainvisibilityChanged', [
      state('false', style({ height: '100%'})),
      state('true', style({ height: '0px' })),
      transition('true => *', animate('.5s')),
      transition('false => *', animate('.3s'))
    ])
  ]
})  
export class MainPage {
  tab1Root = StartPage;
  inBoxRoot = WorkListPage;
  more=MorePage
  tab2Root = null;
  tab3Root = null;
  noOfNotifications=AppModule.notificationNO;
  

  
  showHappinees :boolean=true;
  comments:string;

  smileClass1;
  smileClass2;
  smileClass3;
  smileIcon1;
  smileIcon2;
  smileIcon3;
  selectedFace;
  buttonTxt;
  isUp :boolean=false;
  divClass;
  tabClass1;
  @ViewChild('myTabs') tabRef: Tabs;

  

  
  constructor(public navCtrl: NavController, public navParams: NavParams , public modalCtrl: ModalController, 
    public SocialProvider:SocialProvider , private platform: Platform) {

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');

  
  }
  GetNoOfNotifications()
  {
    return window.localStorage.getItem('noOfNotifications') ? window.localStorage.getItem('noOfNotifications') : '';
  }
  showHappiness() {
   // let modal = this.modalCtrl.create(WorkListPage);
    //modal.present();
  
    var x;
    x=document.getElementsByClassName("main-happiness-container")[0];
    let y =document.getElementsByClassName("smiles-div")[0];



    if (this.showHappinees)
    { 
      // show
    
this.showHappinees=false;
this.tabClass1='tab-class1';

//
// $(x).addClass('leng-elemnt');
// $(x).removeClass('short-elemnt');


    }
    else
   {
     if (this.selectedFace==1|| this.selectedFace==0)  // send any way if uesr select face 
     {
  this.sendAction();
  this.clearData();
     }
     else
     {
    this.clearData();
     }
    // $(x).addClass('short-elemnt');
    // $(x).removeClass('leng-elemnt');

   }
  
    //this.showHappinees=true;

    //


  
  

  }

  happinessSetAction(smile:string)
  {
   
  
   // this.showHappinees=true;
   

   if (smile=='1')
{


                
                 this.smileClass1='smile-fa-btn1 dark-bg btn-rotate';
                 this.smileIcon1='#fff';

                 this.smileClass2='';
                 this.smileIcon2='#353D4e';
                 this.smileClass3='';
                this.smileIcon3='#353D4e';

this.selectedFace=1;
this.buttonTxt='Happy >>';

}

if (smile=='2')
{

  this.smileClass2='smile-fa-btn1 dark-bg btn-rotate';
  this.smileIcon2='#fff';

  this.smileClass1='';
  this.smileIcon1='#353D4e';
  this.smileClass3='';
 this.smileIcon3='#353D4e';

 this.selectedFace=0;
 this.buttonTxt='Neutral >>';
}


if (smile=='3')
{

  this.smileClass3='smile-fa-btn1 dark-bg btn-rotate';
  this.smileIcon3='#fff';

  this.smileClass1='';
  this.smileIcon1='#353D4e';
  this.smileClass2='';
  this.smileIcon2='#353D4e';

  this.selectedFace=-1;
  this.buttonTxt='Sad    >>';

}
    
//


 

  }

  hideContainer(event)
    {
   
    //  this.showHappinees=true;

      //

     let source=event.target.id;
    let classesName= event.target.className;
     if (source && source=='main-div')
{
      if (this.selectedFace==1|| this.selectedFace==0)  /// send if want to hide also 
      {
  this.sendAction();
  this.clearData();
      }else
      {
              this.clearData();

      }

}  

else 
{
     if (classesName && classesName.indexOf('input')>1)
     {

     }
     else
     this.goDown();
  
}
      
    }

    sendAction()
    {

try
{

  this.SocialProvider.sendHappiness ( this.selectedFace,this.comments ,'1');
  this.clearData();
}
catch(err)
{

}

    }

    clearData()
    {
      this.selectedFace=null;
  this.comments=null;

  this.showHappinees=true;
  this.smileClass1='';
  this.smileIcon1='#353D4e';
  this.smileClass2='';
  this.smileIcon2='#353D4e';
  this.smileClass3='';
 this.smileIcon3='#353D4e';
 this.tabClass1='';
 this.goDown();
    }


    goUp()
    {
   
        if (this.platform.is('android')) 
             {
                if (!this.isUp)
                {
                  this.isUp=true;
                  this.divClass='up-class';
                }
                
             }
    }

    goDown()
    {
      this.isUp=false;
      this.divClass='';
    }
    goOut()
    {

    }

 
  
}
