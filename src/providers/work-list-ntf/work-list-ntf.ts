import { HttpClient ,HttpHeaders ,HttpParams} from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';

import { HTTP   } from '@ionic-native/http';  


/*
  Generated class for the WorkListNtfProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WorkListNtfProvider {




  constructor(public http: HTTP ,public httpClient: HttpClient,  public platform: Platform , public loadingController: LoadingController ,  public AlertController :AlertController ,private aes256: AES256,public appCtrl :App) {
    console.log('Hello WorkListNtfProvider Provider');
  }




 



async getWorkListPost( fromRecord :string, toREcord:string )
{
  


let ws='wf/notications/getWorkListPost';


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





async takeAction(notificationId ,  itemType , itemKey  , activityId , buttonName   , attributes )
{


  let ws='wf/notications/takeNotificationAction';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 
  let methodHeaders = new HttpHeaders({
     'Content-Type':'application/json ; charset=UTF-8' ,
   'Accept':'application/json',
   'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
   'Access-Control-Allow-origin':'*',
   'wsid':AppModule.getProperty('wsid'),
    'signature':t+'',
   'Authorization': AppModule.authentication,
   'notificationId': notificationId+'' ,
   'oracle-mobile-backend-id':AppModule.backendId,
	'resourceName' :ws


 
 });

 let actionMethodHeaders = {
  'signature':encodeURI(t+''),
  'ntf': notificationId+'' ,
};


                              if (itemType)
                            {
                              methodHeaders=methodHeaders.append('it',itemType)
                              actionMethodHeaders['it']=itemType;
                            }
                            if (itemKey)
                            {
                              methodHeaders=methodHeaders.append('ik',itemKey)
                              actionMethodHeaders['ik']=itemKey;
                            }
                            if (activityId)
                            {
                              methodHeaders=methodHeaders.append('ai',activityId)
                              actionMethodHeaders['ai']=activityId;
                            }
                            if (buttonName)
                            {
                              methodHeaders=methodHeaders.append('bn',buttonName)
                              actionMethodHeaders['bn']=buttonName;
                            }
                           

                            if (attributes)
                            {
                              methodHeaders=methodHeaders.append('attributes',attributes)
                              actionMethodHeaders['attributes']=attributes;
                            }
 
                            return new Promise(resolve => {

                              AppModule.getData(this.httpClient,this.http,ws,actionMethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
                                 resolve(data);
                                }
                                 , err => {
                                  AppModule.showMessage(this.AlertController,'Error');
                                  }
                            
                                );
                              });

}



async getNoticationBody(notificationId ,  itemType , itemKey   , generatorApi  )
{



  let ws='wf/notications/getNotoficationBody';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

 let methodHeaders = new HttpHeaders({
  'Content-Type':'application/json ; charset=UTF-8' ,
'Accept':'application/json',
'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
'Access-Control-Allow-origin':'*',
'wsid':AppModule.getProperty('wsid'),
'signature':t+'',
'Authorization': AppModule.authentication,
'notificationId': notificationId+'' ,
'generatorApi': generatorApi+'' ,
'oracle-mobile-backend-id':AppModule.backendId,
'resourceName' :ws


});

let bodyMethodHeaders = {
  'signature':encodeURI(t+''),
  'ntf': notificationId+'' ,
  'gn': generatorApi+'' 
};

if (itemType)
{
  methodHeaders=methodHeaders.append('it',itemType)
  bodyMethodHeaders['it']=itemType;
}
if (itemKey)
{
  methodHeaders=methodHeaders.append('ik',itemKey)
  bodyMethodHeaders['ik']=itemKey;
 }

 return new Promise(resolve => {

  AppModule.getData(this.httpClient,this.http,ws,bodyMethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
     resolve(data);
    }
     , err => {
      AppModule.showMessage(this.AlertController,'Error');
      }

    );
  });


}



async getNotificationHistory( notificationId,itemType , itemKey  , processActivity  , filterType  )
{
 


  let ws='wf/notications/getNotificationHistory';
 
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

  let methodHeaders = new HttpHeaders({
     'Content-Type':'application/json ; charset=UTF-8' ,
   'Accept':'application/json',
   'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
   'Access-Control-Allow-origin':'*',
   'wsid':AppModule.getProperty('wsid'),
   'signature':t+'',
   'Authorization': AppModule.authentication,
   'notificationId': notificationId+'' , 
   'filterType':''+filterType+'',
   'oracle-mobile-backend-id':AppModule.backendId,
   'resourceName' :ws
 
 });

 let historyMethodHeaders = {
  'signature':encodeURI(t+''),
  'ntf': notificationId+'' , 
  'ft':''+filterType+'',
};

 if (itemType)
{
  methodHeaders=methodHeaders.append('it',itemType)
  historyMethodHeaders['it']=itemType;
}
if (itemKey)
{
  methodHeaders=methodHeaders.append('ik',itemKey)
  historyMethodHeaders['ik']=itemKey;
 }

 if (processActivity)
{
  methodHeaders=methodHeaders.append('pa',processActivity)
  historyMethodHeaders['pa']=processActivity;
 }

 return new Promise(resolve => {

  AppModule.getData(this.httpClient,this.http,ws,historyMethodHeaders,null,this.AlertController,this.appCtrl).then(data => { 
     resolve(data);
    }
     , err => {
      AppModule.showMessage(this.AlertController,'Error');
      }

    );
  });

}

async getWorkListcountPost()
{
  

  let ws='wf/notications/getWorkListCountPost'


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




async getUsers()
{

  let ws='wf/notications/getUsers';
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





async takeReassignAction(notificationId ,  newRole , comments   , buttonName    )
{

  let ws='wf/notications/takeReassignAction';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 




 
 let methodHeaders = {
  'signature':encodeURI(t+''),
  'ntf': notificationId+'' , 
   'newRole':''+newRole+'',
   'comments':''+encodeURI(comments)+'',
   'bn':''+buttonName+'',
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



async getNotificationAttributes(notificationId  )
{

  let ws='wf/notications/getNotificationAttributes';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 



  let methodHeaders = {
    'signature':encodeURI(t+''),
    'ntf': notificationId+'' 
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



async getLookUp(lookUpType  )
{


  let ws='wf/notications/getLookUp';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



 let methodHeaders = {
  'signature':encodeURI(t+''),
  'lookUpType': lookUpType+'' 
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



async getDelegationHistory( )
{
  

  let ws='wf/notications/getDelegationHistory';
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

async getDelegationTypes(  )
{

  let ws='wf/notications/getDelegationTypes';
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



async addVactionRule (dateStart :Date  ,dateEnd :Date  , itemType : string, toUser : string, comments : string )
{
 
  let ws='wf/notications/addVacatiobRule';
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
 



 let methodHeaders = {
  'signature':encodeURI(t+''),
  'dateStart':dateStart.toString() ,
   'dateEnd':dateEnd.toString() ,
   'it': itemType+'' , 
   'newRole': toUser+'' , 
};

 if (comments)
 {
   methodHeaders['comments']=encodeURI(comments);
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

async updateVactionRule (ruleId : string , dateStart :Date  ,dateEnd :Date  , toUser : string, comments : string )
{


  let ws='wf/notications/updateVacationRule'
  let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );


 let methodHeaders = {
  'signature':encodeURI(t+''),
  'rxd': ruleId+'' , 
  'dateStart':dateStart.toString() ,
  'dateEnd':dateEnd.toString() ,
  'newRole': toUser+''
};


 if (comments)
 {
   methodHeaders['comments']=encodeURI(comments);
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

async deleteVacationRule (ruleId : string  )
{


  let ws='wf/notications/deleteVacationRule';
   let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



  let methodHeaders = {
    'signature':encodeURI(t+''),
    'rxd': ruleId+'' ,
  };
    

  return new Promise(resolve => {

    AppModule.getData(this.httpClient,this.http,ws,methodHeaders,null,this.AlertController,this.appCtrl).then(data => { 
       resolve(data);
      }
       , err => {
        AppModule.showMessage(this.AlertController,'Error');
        }
  
      );
    });

}

}
