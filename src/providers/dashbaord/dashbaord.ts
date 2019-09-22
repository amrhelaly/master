import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';
import { HTTP   } from '@ionic-native/http';  
/*
  Generated class for the DashbaordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DashbaordProvider {

  constructor(public http: HTTP ,public httpClient: HttpClient, public loadingController: LoadingController , public AlertController :AlertController,private aes256: AES256,public appCtrl :App){
    console.log('Hello DashbaordProvider Provider');
  
  }



  // HR

  async getEmployeeCountBUDirectorate()
  {
   
    let ws='dash/board/getEmployeeCountBUDirectorate'
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
   
    let methodHeaders = {
      'signature':encodeURI(t+''),
      'directorateType':AppModule.getProperty('isArabyia')
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



  async getEmployeeHeadcountGender()
  {
   
    let ws='dash/board/getEmployeeHeadcountGender'
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
   
    let methodHeaders = {
      'signature':encodeURI(t+''),
      'directorateType':AppModule.getProperty('isArabyia')
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


  async getEmployeeCountPersonTypeDirectorate(businessGroup)
{
 
  let ws='dash/board/getEmployeeCountPersonTypeDirectorate'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
    'directorateType':AppModule.getProperty('isArabyia'),
    'businessGroup':''+businessGroup+''
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


async getOverTimeMonthsDirectorateType()
{
 
  let ws='dash/board/getOverTimeMonthsDirectorateType'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
    'directorateType':AppModule.getProperty('isArabyia')
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


async getOverTimeMonthDepartments(year: string , month :string)
{
 
  let ws='dash/board/getOverTimeMonthDepartments'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
    'directorateType':AppModule.getProperty('isArabyia'),
    'year':''+year+'',
    'monthNo':month+'',
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

async getExtraTimeWorkedBGDierctorateType()
{
 
  let ws='dash/board/getExtraTimeWorkedBGDierctorateType'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
    'directorateType':AppModule.getProperty('isArabyia')
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


async getExtraTimeWorkedDepartmentDierctorateType(businessGroup: string)
{
 
  let ws='dash/board/getExtraTimeWorkedDepartmentDierctorateType'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = {
    'signature':encodeURI(t+''),
    'directorateType':AppModule.getProperty('isArabyia'),
    'businessGroup':''+businessGroup+'',
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


  
/////////////////////////

/*
  getBuHeadCount ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getBUheadCount';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :'dash/board/getBUheadCount'
   
   });
   
   return new Promise(resolve => {
     this.http.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }

  getDirectorateHeadCount (businessGroup: string)
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getDiectorateHeadCount';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'businessGroup':''+businessGroup+'',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :'dash/board/getDiectorateHeadCount'
   
   });
   
   return new Promise(resolve => {
     this.http.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }



  getOverTimeMonths ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getOverTimeMonths';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :'dash/board/getOverTimeMonths'
   
   });
   
   return new Promise(resolve => {
     this.http.post(url, null, { headers: methodHeaders }).timeout(150000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }


  getOverTimeMonthDirctorates (month_no: string)
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getOverTimeMonthDirctorates';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'attribute1':''+month_no+'',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :'dash/board/getOverTimeMonthDirctorates'
   
   });
   
   return new Promise(resolve => {
     this.http.post(url, null, { headers: methodHeaders }).timeout(150000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }

*/


  















  /////scm
 
  getApprovedPo ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getApprovedPo';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
     'directorateType':AppModule.directorateType,
	  'resourceName' :'dash/board/getApprovedPo'
   
   });
   
   return new Promise(resolve => {
     this.httpClient.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }

  getOperatinUnitBudgetPerAccount (organizationId:string)
  {
   
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/dash/board/getOperatinUnitBudgetPerAccount';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
     'organizationId':organizationId+'',
	  'resourceName' :'dash/board/getOperatinUnitBudgetPerAccount'
   
   });
   
   return new Promise(resolve => {
     this.httpClient.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
        resolve(data);
        console.log ('data88');
        console.log (data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }
  

}
