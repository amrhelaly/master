import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, ActionSheetController, AlertController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { MainPage } from '../main/main';
import { Platform } from 'ionic-angular';
import { LogInServiceProvider } from '../../../providers/log-in-service/log-in-service';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { LoadingController } from 'ionic-angular';
import * as $ from 'jquery'; 

import * as CryptoJS from 'crypto-js';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare var cordova: any;
import { Observable } from "rxjs/Rx";
import { dateSortValue } from 'ionic-angular/util/datetime-util';
import { AppModule } from '../../../app/app.module';
import { Message } from '../../../../node_modules/@angular/compiler/src/i18n/i18n_ast';

import { AES256 } from '@ionic-native/aes-256';
import { resolve } from 'path';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  user: string;
  userPass: string;
  isok: any;
  AioResult:any;
  result: String;
  fop: FingerprintOptions;
  showFingerButton = false;
  showFaceButton=false;
  bioType='finger';
  test: Observable<any>;
  loginresult: number = 0;
  loginMessage :string;
mmx: any;



  constructor(public navCtrl: NavController, public logProvider: LogInServiceProvider,
    public toastCtrl: ToastController, private fingerPrint: FingerprintAIO, private platform: Platform,
    private storage: Storage, private statusBar: StatusBar, public loadingController: LoadingController,
    private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController , private aes256: AES256
  ) {

    

    this.statusBar.overlaysWebView(true);
    if (this.platform.is('ios')) {
      //this.statusBar.hide();
      this.statusBar.overlaysWebView(false);
      AppModule.platform=2;
    }
 
    // this.statusBar.backgroundColorByHexString("#00a2e8");
    this.fop = {

      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', 
      disableBackup: true,  
      localizedFallbackTitle: 'Use Pin', 
      localizedReason: 'Smart Touch' 


    }





  }




  ionViewDidLoad() {
    // consider putting loading 
    setTimeout(() => {
      this.intilaiazelogin();
    }, 3000);
  }

  async  intilaiazelogin() {
   

    let userfinger = await this.getValue('bx');
    if (userfinger) {

      const FPA = await this.checkFingerPrintAvailabliity();
      if (FPA == 1) {
     let   ref1 = await this.getValue('ref1');
     let   ref2 = await this.getValue('ref2');

        if (ref1) {

          this.showfin(ref1, ref2);
          if (this.bioType=='face')
          this.showFaceButton=true;
          else
          this.showFingerButton=true;
         
        }
        else {

        }
      }

    }
  }

async mm(s,e)
{

  await this.logProvider.xx(s,e)

  .then(async data => {
this.mmx=data;
   return data;

  
  });

}



  async  login() {

    // var b = new Buffer('Amhelaly:Amr0114317$Reva2015');
    // var s = b.toString('base64');
    // alert (s+','+'QW1oZWxhbHk6QW1yMDExNDMxNyRSZXZhMjAxNQ');
    // alert (AppModule.tobase64('Amhelaly:Amr0114317$Reva2015'));
//    let t;
//     if (1==1)
//     {
//       let start=0;
//       let step=99;
//       let t;
// for (var i=0;i<2408;i++)
// {
//       const result = await this.mm(start,start+step);

    
//       if (!t)
//       t=this.mmx;
//       else
//       t=t+','+this.mmx;

//       start=start+step+1;
// }
 

//       let a = document.createElement('a');
// a.href = "data:application/octet-stream,"+encodeURIComponent('{"total_length":240707,"rows":['+t+']}');
// a.download = 'abc.txt';
// a.click();
      
//     }

    let error = 0;
    if (this.user == null || this.user.length == 0) {
      
        this.showErrorUser();

      error = 1;
    }

    if (this.userPass == null || this.userPass.length == 0) {
      
        this.showErrorPass();

      error = 1;
    }
    if (error == 1)
      return;

//
//AppModule.authentication='Basic '+ AppModule.tobase64(this.user+':'+this.userPass);
 

    try {
      let loader = AppModule.showLoader(this.loadingController );
      
      setTimeout(async () => {
        AppModule.stopLoader(loader);
        const result = await this.getAuthentication(this.user, this.userPass);
        console.log('result is :' + this.loginresult);

        if (this.loginresult == 0)
        {  
         
                if (this.loginMessage && this.loginMessage.toUpperCase().indexOf('UPDATE')>1)
                {
                  // update 
                  AppModule.showUpdateMessage(this.alertCtrl,this.loginMessage);
                }
                else
                {
                  // other messages 
                  AppModule.showMessage(this.alertCtrl,this.loginMessage);
                }


        }
          else  // correct one 
        {

          const FPA = await this.checkFingerPrintAvailabliity();
          if (FPA == 1) {
           
                if (this.platform.is('ios')) {
                  this.showconfirmfinger();
                }
                else
                  this.showConfirm();
           
          }
          else {
            
            this.navigat();
          }
        }

      }, 3000);

    }

    catch (error) {

      AppModule.showMessage(this.alertCtrl,'Error:'+error)
    }


  }

  navigat() {
   
    this.navCtrl.setRoot(MainPage);

  }
  async getAuthentication(user: string, pa: string): Promise<any> {


    try {

      await this.logProvider.getUserAuthentication(user, pa)

        .then(async data => {

          this.isok = data;

          if (this.isok[0].message == '0') {

           // console.log('wrong');

            this.loginresult = 0;
            this.loginMessage=this.isok[0].value;

          }
          else {
          //  this.setValue(user, pa);


            this.loginresult = 1;


          }
        });

    }
    catch (error) {

     //AppModule.showMessage(this.alertCtrl,'Error:'+error)
    }

  }

  async loginAio(token: string, signature: string): Promise<any> {


    try {

      await this.logProvider.loginAio(token, signature)

        .then(async data => {

          this.isok = data;

          if (this.isok[0].message == '0') {

      

            this.loginresult = 0;
            this.loginMessage=this.isok[0].value;

          }
          else {
         


            this.loginresult = 1;


          }
        });

    }
    catch (error) {

     //AppModule.showMessage(this.alertCtrl,'Error:'+error)
    }

  }


  showConfirm() {
    let message='Do you want to use your Touch ID to login ?';
    if(this.bioType=='face')
    message='Do you want to use your Face ID to login ?';


    let confirm = this.alertCtrl.create({
      title: 'Login',
      message: message,
      buttons: [
        {
          text: 'No',
          handler: () => {
        
            this.navigat();
          
          }
        },
        {
          text: 'Yes',
          handler: () => {

            this.showconfirmfinger();
           
          }
        }
      ]
    });
    confirm.present();
  }





  async showfin(token, signature) {
   

    try {
      await this.platform.ready();
      const av = await this.fingerPrint.isAvailable();
      if (av == 'OK' || av == 'finger' || av=='face') {
        const res = await this.fingerPrint.show(this.fop);
       const result = await this.loginAio(token, signature);

       if (this.loginresult == 0)
       {  
        
               if (this.loginMessage && this.loginMessage.toUpperCase().indexOf('UPDATE')>1)
               {
                 // update 
                 AppModule.showUpdateMessage(this.alertCtrl,this.loginMessage);
               }
               else
               {
                 // other messages 
                 AppModule.showMessage(this.alertCtrl,this.loginMessage);
               }


       }
        else {
          this.navigat();
        }

      }
      else {

      }
     
    } catch (error) {
     
    }


  }

  async registerAio(){


    try {

      await this.logProvider.registerAio(this.userPass)

        .then(async data => {

          this.AioResult = data;

         

          if (this.AioResult[0].message == '1') {

            this.storage.set('ref1', this.AioResult[0].ref1);
            this.storage.set('ref2', this.AioResult[0].ref2);
            this.storage.set('bx', '0xxxx0t');

          }
          else {
            alert (this.AioResult[0].value );

           
            AppModule.showMessage(this.alertCtrl,'Failed to register Biometric');


          }
        });

    }
    catch (error) {

    
    }

  }


  async showconfirmfinger() {

   
    try {
      await this.platform.ready();
      const av = await this.fingerPrint.isAvailable();
      if (av == 'OK' || av == 'finger' || av=='face') {
        const res = await this.fingerPrint.show(this.fop);
        const token = await this.registerAio();
      

        this.navigat();

      }
      else {

        this.navigat();
      }



    } catch (error) {
     
      this.navigat();
    }


  }







  async checkFingerPrintAvailabliity(): Promise<any> {
    try {
      await this.platform.ready();
      const av = await this.fingerPrint.isAvailable();
      if (av == 'OK' || av == 'finger' || av=='face') {
          if (av=='face')
           this.bioType='face';
        return 1;
      }
      else return 0;
    }
    catch (err) {
      return 0;
    }


  }



  async getValue( name) {

    return new Promise(resolve => {
      this.storage.get(name).then((val) => {
        resolve(val);
      });

    });
  }





  showErrorUser() {



    var el;
    el = document.getElementById("userId");
    $(el).addClass('error-color');
    // x.style.display="none";
    // $(x).notify("You should enter a userName",  { className:"error",  position:"top center",autoHideDelay: 2500,showDuration: 200 });
  }

  showErrorPass() {

    let el;
    el = document.getElementById("passId");
    $(el).addClass('error-color');
    
  }






  async fingerPrinAction()
  {
    

    let   ref1 = await this.getValue('ref1');
    let   ref2 = await this.getValue('ref2');
  
    if (ref1) {
  
      this.showfin(ref1, ref2);
  
  } 
  

  
  }







}

