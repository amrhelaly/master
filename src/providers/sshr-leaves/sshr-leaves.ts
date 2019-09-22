import { HttpClient ,HttpHeaders ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';

import { HTTP   } from '@ionic-native/http';  

/*
  Generated class for the SshrLeavesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SshrLeavesProvider {
  



  constructor(public http: HTTP ,public httpClient: HttpClient ,public loadingController: LoadingController ,  public AlertController :AlertController,private aes256: AES256,public appCtrl :App) {
    
  }

 

  async getApprovedLeavesCount( ) {


    
    let ws='sshr/leavesHistory/getApprovedLeavesCount';
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
 

  async getApprovedLeaves() {

    let ws='sshr/leavesHistory/getApprovedLeaves';
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



  async getPendingLeavesCount() 
  {

    let ws='sshr/leavesHistory/getPendingLeavesCount';
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


  async getPendingLeaves( )
  {

    let ws='sshr/leavesHistory/getPendingLeaves';
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




  async getLeaveTypes( ) {
    let ws='sshr/newLeave/getLeavesTypes';
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

  



  async getLOStypes( ) {

    let ws='sshr/newLeave/getLOSTypes';
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



  async getCLRtypes( ) {
    

    let ws='sshr/newLeave/getCLRTypes';
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

  

  async newLeaveRequest(
    dateStart :Date  ,dateEnd :Date , absenceAttendanceTypeId: string , absenceTypeName :string,
    status :string  ,attribute1 :string , attribute2: string , attribute3 :string,
    attribute4 :string , attribute5: string , attribute6 :string,attribute7: string , attribute8 :string,attachId :string , img :string , replacedPerson :string) 
     {

      let ws='sshr/newLeave/applyNewLeave';
      let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



 let methodHeaders = new HttpHeaders({
    'Content-Type':'application/json ; charset=UTF-8' ,
  'Accept':'application/json',
  'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
  'Access-Control-Allow-origin':'*',
  'Authorization': AppModule.authentication,
  'wsid':AppModule.getProperty('wsid'),
  'signature':t+'',
  'dateStart':dateStart.toString() ,
   'dateEnd':dateEnd.toString() ,
  'absenceAttendanceTypeId':absenceAttendanceTypeId+'' ,
  'absenceTypeName': absenceTypeName+'',
  'status':status,
  'oracle-mobile-backend-id':AppModule.backendId,
  'resourceName' :ws


});

let leaveMethodHeaders = {
  'signature':encodeURI(t+''),
  'dateStart':dateStart.toString() ,
  'dateEnd':dateEnd.toString() ,
  'absAttx':absenceAttendanceTypeId+'' ,
  'abst': absenceTypeName+'',
  'status':status
};

if (attribute1)
{
  methodHeaders=methodHeaders.append('attribute1',attribute1)
  leaveMethodHeaders['attribute1']=attribute1;
}
if (attribute2)
{
methodHeaders=methodHeaders.append('attribute2',encodeURI(attribute2))
leaveMethodHeaders['attribute2']=encodeURI(attribute2);
}
if (attribute3)
{
methodHeaders=methodHeaders.append('attribute3',attribute3)
leaveMethodHeaders['attribute3']=attribute3;
}
if (attribute4)
{
methodHeaders=methodHeaders.append('attribute4',attribute4)
leaveMethodHeaders['attribute4']=attribute4;
}
if (attribute5)
{
methodHeaders=methodHeaders.append('attribute5',attribute5)
leaveMethodHeaders['attribute5']=attribute5;
     }
if (attribute6)
{
methodHeaders=methodHeaders.append('attribute6',attribute6)
leaveMethodHeaders['attribute6']=attribute6;
}
if (attribute7)
{
methodHeaders=methodHeaders.append('attribute7',attribute7)
leaveMethodHeaders['attribute7']=attribute7;
}
if (attribute8)
{
methodHeaders=methodHeaders.append('attribute8',attribute8)
leaveMethodHeaders['attribute8']=attribute8;
}
if (attachId)
{
methodHeaders=methodHeaders.append('atx',attachId)
leaveMethodHeaders['atx']=attachId;
}
if (replacedPerson)
{
methodHeaders=methodHeaders.append('rp',replacedPerson+'')
leaveMethodHeaders['rp']=replacedPerson+'';
}




return new Promise(resolve => {

  AppModule.getData(this.httpClient,this.http,ws,leaveMethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
     resolve(data);
    }
     , err => {
      AppModule.showMessage(this.AlertController,'Error');
      }

    );
  });


}



async addAttach( attachId,img)
{

  let ws='sshr/newLeave/addAttach';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

 
 let methodHeaders = {
  'signature':encodeURI(t+''),
  'atx':attachId+'',
   'fd':img,
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




async getAnnualLeavesBalance( )
{
  

  let ws='sshr/leavesHistory/getAnnualLeavesBalance';
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



async getToilBalance( )
{


  let ws='sshr/leavesHistory/getToilBalance';
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




async getToilExpire( )
 {

let ws='sshr/leavesHistory/getTOILExpirePost';
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


async getleaveHistory( itemType , itemKey  )
{
  

  let ws='wf/notications/getNotificationHistory';
   let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



 let methodHeaders = {
  'signature':encodeURI(t+''),
  'filterType':'HR',
};


 if (itemType)
{

  methodHeaders['itemType']=itemType;
}
if (itemKey)
{

  methodHeaders['itemKey']=itemKey;
 }

 
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
