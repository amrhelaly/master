import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';
import { HTTP   } from '@ionic-native/http';  

/*
  Generated class for the SchedulerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SchedulerProvider {

  constructor(public http: HTTP ,public httpClient: HttpClient, public loadingController: LoadingController , public AlertController :AlertController,private aes256: AES256,public appCtrl :App) {
    console.log('Hello SchedulerProvider Provider');
  }

//   getMySpaceList( personId: string ) {

//     let loader=AppModule.showLoader(this.loadingController );
//    // AppModule.wsURL=
//    // 'http://10.10.131.34:7003/mbcWebserviceAA/resources';
//     let url;
//     if (AppModule.isCloud)
//     {
//       url=AppModule.wsURL;
//     }
//     else url =AppModule.wsURL+'/aa/scheduler/getMyspaceCurrent';
//     url =AppModule.wsURL+'/aa/scheduler/getMyspaceCurrent';
//  let methodHeaders = new HttpHeaders({
//     'Content-Type':'application/json ; charset=UTF-8' ,
//   'Accept':'application/json',
//   'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
//   'Access-Control-Allow-origin':'*',
//   'Authorization': AppModule.authentication,
//   'prId': personId+'' , 
//  // 'businessGroup':''+businessGroup+'',
//   'oracle-mobile-backend-id':AppModule.backendId,
// 	'resourceName' :'aa/scheduler/getMyspaceCurrent'

// });

async getMySpaceList(dateStart :string)
{
 
  let ws='aa/scheduler/getMyspace';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
   // 'prId': '69146'+'' , 
    'dateStart':''+dateStart+'',
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

getMySpaceListx( personId: string ,dateStart :string) {

  let loader=AppModule.showLoader(this.loadingController );
 // AppModule.wsURL=
 // 'http://10.10.131.34:7003/mbcWebserviceAA/resources';
  let url;
  if (AppModule.isCloud) 
  {
    url=AppModule.wsURL;
  }
  else url =AppModule.wsURL+'/aa/scheduler/getMyspace';
  url =AppModule.wsURL+'/aa/scheduler/getMyspace';
let methodHeaders = new HttpHeaders({
  'Content-Type':'application/json ; charset=UTF-8' ,
'Accept':'application/json',
'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
'Access-Control-Allow-origin':'*',
'Authorization': AppModule.authentication,
//'prId': personId+'' , 
 'dateStart':''+dateStart+'',
'oracle-mobile-backend-id':AppModule.backendId,
'resourceName' :'aa/scheduler/getMyspace'

});


return new Promise(resolve => {
  this.httpClient.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
     resolve(data);
     AppModule.stopLoader(loader);
   }
   , err => {
     console.log (err)
  AppModule.stopLoader(loader);
    AppModule.showMessage(this.AlertController,'No Connection')

   }
 );
 });

  }


  async getMyTeamList(dateStart:string)
  {
   
    let ws='aa/scheduler/getMyteam'
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
   
    let methodHeaders = {
      'signature':encodeURI(t+''),
      'prId': '69146'+'' , 
      'orgId':''+AppModule.getProperty('AAorganization'),
      'dateStart':''+dateStart+'',
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


  
  getMyTeamListx( personId: string,orgId: string  ,dateStart:string) {

    let loader=AppModule.showLoader(this.loadingController );
   // AppModule.wsURL=
   // 'http://10.10.131.34:7003/mbcWebserviceAA/resources';
    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/aa/scheduler/getMyteam';
    url =AppModule.wsURL+'/aa/scheduler/getMyteam';
 let methodHeaders = new HttpHeaders({
    'Content-Type':'application/json ; charset=UTF-8' ,
  'Accept':'application/json',
  'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
  'Access-Control-Allow-origin':'*',
  'Authorization': AppModule.authentication,
  'prId': personId+'' , 
  'orgId':''+orgId+'',
  'dateStart':''+dateStart+'',
  'oracle-mobile-backend-id':AppModule.backendId,
	'resourceName' :'aa/scheduler/getMyteam'

});

return new Promise(resolve => {
  this.httpClient.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
     resolve(data);
     AppModule.stopLoader(loader);
   }
   , err => {
     console.log (err)
  AppModule.stopLoader(loader);
    AppModule.showMessage(this.AlertController,'No Connection')

   }
 );
 });

  }





}
