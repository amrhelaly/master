import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';
import { HTTP   } from '@ionic-native/http';  
/*
  Generated class for the PayrollProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PayrollProvider {

  wsURLx = 'http://10.10.131.34:7004/mbcWebservice/resources';
  constructor(public http: HTTP ,public httpClient: HttpClient, public loadingController: LoadingController , public AlertController :AlertController,private aes256: AES256,public appCtrl :App) {
    console.log('Hello PayrollProvider Provider');
  }


  async getBankInfo()
  {
   
    let ws='payroll/info/getBankInfo'
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
   
    let methodHeaders = {
      'signature':encodeURI(t+'')
    };
      
  
    return new Promise(resolve => {
  
      AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
         resolve(data);
        }
         , err => {
          AppModule.showMessage(this.AlertController,'Error');
          }
    
        );
      });

  }



  async getPayslipList() {

    let ws='payroll/info/getPayslipList';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



let methodHeaders = {
  'signature':encodeURI(t+''),
  'bu':AppModule.getProperty('bu'),

};

return new Promise(resolve => {

  AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
     resolve(data);
    }
     , err => {
      AppModule.showMessage(this.AlertController,'Error');
      }

    );
  });

  }




  async getPayrollEarnings( actionContextId: string)
  {

    let ws='payroll/info/getPayrollEarnings';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+actionContextId );

   let methodHeaders = {
    'signature':encodeURI(t+''),
    'bu':AppModule.getProperty('bu'),
    'acx':''+actionContextId

  };
   
  return new Promise(resolve => {

    AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
       resolve(data);
      }
       , err => {
        AppModule.showMessage(this.AlertController,'Error');
        }
  
      );
    });


  }




  async getPayrollDeductions(actionContextId: string )

  {

    let ws='payroll/info/getPayrollDeductions';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+actionContextId );


   let methodHeaders = {
    'signature':encodeURI(t+''),
    'bu':AppModule.getProperty('bu'),
    'acx':''+actionContextId,
  };
   
   return new Promise(resolve => {

    AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
       resolve(data);
      }
       , err => {
        AppModule.showMessage(this.AlertController,'Error');
        }
  
      );
    });

  }
 

  async getsalaryHistory() {


    let ws='payroll/info/getSalaryHistory';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

    let methodHeaders = {
      'signature':encodeURI(t+'')
    };
      
  
      return new Promise(resolve => {
  
        AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
           resolve(data);
          }
           , err => {
            AppModule.showMessage(this.AlertController,'Error');
            }
      
          );
        });

  }
}
