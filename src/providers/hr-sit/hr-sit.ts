import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';
import { HTTP ,  } from '@ionic-native/http';     

/*
  Generated class for the HrSitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HrSitProvider {
  


  constructor(public http: HTTP ,public httpClient: HttpClient,public loadingController: LoadingController ,  public AlertController :AlertController , private aes256: AES256,public appCtrl :App) {
   
  
  }
 
  async getLettersTypes() {
    
    let ws='sshr/sit/getLettersTypes';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

    let methodHeaders = {
    'signature':encodeURI(t+''),
    'bu':AppModule.getProperty('bu')+''
    
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


  async getSalaryUpdateTypes() {

    let ws='sshr/sit/getTecomSalatUpdateTypes';
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

  async getSalaryUpdateTypesxx() {


    
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    let ws='sshr/sit/getTecomSalatUpdateTypes';
if (AppModule.isCloud)
{
  url=AppModule.wsURL;
}
else
     url =AppModule.wsURL+'/'+ws;
  
     let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'wsid':AppModule.getProperty('wsid'),
     'signature':t+'',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :ws
     

   
   });

   let xx = {
    'Content-Type':'application/json ; charset=UTF-8' ,
  'Accept':'application/json',
  'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
  'Access-Control-Allow-origin':'*',
  'wsid':AppModule.getProperty('wsid'),
  'signature':t+'',
  'Authorization': AppModule.authentication,
  'oracle-mobile-backend-id':AppModule.backendId,

  


};

xx['resourceName']=ws;

let methodHeadersxx = new HttpHeaders(xx);
   
   return new Promise(resolve => {
     this.httpClient.post(url, null, { headers: methodHeadersxx }).timeout(5000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
       AppModule.handleError(err,loader,this.AlertController,this.appCtrl);

   
      }
    );
    });
   
 


  }





  
  async getHousingRequestTypes() {



    let ws='sshr/sit/getHousingRequestypes';
    

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

  async getBusinessCardTypes() {






    let ws='sshr/sit/getCardTypes';
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



  async getBusinessCardLanguages() {


    let ws='sshr/sit/getCardLanguages';
    
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

  async getBusinessCardDefaultData() {



    let ws='sshr/sit/getCardTDefualtData';
    
   
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





  async submitLetter( status: string, letterType: string
    , cbt: string, travleDestination: string, salaryTecome: string, letterLine1: string, letterLine2: string, cb: string) {




      let ws='sshr/sit/applySITRequestPost';
      let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );

    let UAEmethodHeaders = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'wsid':AppModule.getProperty('wsid'),
      'signature':t+'',
      'Authorization': AppModule.authentication,
      'sitTitle': '' + 'Request Letters from HR',
      'status': '' + status,
      'oracle-mobile-backend-id':AppModule.backendId,
      'resourceName' :ws
      
      

    });

   
    let UAEletterMethodHeaders = {
      'signature':encodeURI(t+''),
      'sitTitle': '' + 'Request Letters from HR',
      'status': '' + status
    };
      
  
  


            if (letterType)
              {
                  UAEmethodHeaders=UAEmethodHeaders.append('segment1',letterType);
                  UAEletterMethodHeaders['segment1']=letterType;
              }

            if (cbt)
            {
                UAEmethodHeaders=UAEmethodHeaders.append('segment12',encodeURI(cbt))
                UAEletterMethodHeaders['segment12']=encodeURI(cbt);
            }

            if (travleDestination)
            {
                UAEmethodHeaders=UAEmethodHeaders.append('segment11',encodeURI(travleDestination))
                UAEletterMethodHeaders['segment11']=encodeURI(travleDestination);
            }

            if (salaryTecome)
            {
                UAEmethodHeaders=UAEmethodHeaders.append('segment13',salaryTecome)
                UAEletterMethodHeaders['segment13']=salaryTecome;
            }


    let KSAmethodHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'wsid':AppModule.getProperty('wsid'),
     'signature':t+'',
      'Authorization': AppModule.authentication,
      'sitTitle': '' + 'Request Letters from Saudi HR',
      'status': '' + status,
      'segment1': '' + letterType,
      'segment2': '' + encodeURI(letterLine1),
      'segment3': '' + encodeURI(letterLine2),
      'oracle-mobile-backend-id':AppModule.backendId,
	    'resourceName' :ws
     

    });

    let KSAletterMethodHeaders = {
      'signature':encodeURI(t+''),
      'sitTitle': '' + 'Request Letters from Saudi HR',
      'status': '' + status,
    };


    if (letterType)
              {
                KSAmethodHeaders=KSAmethodHeaders.append('segment1',letterType)
                KSAletterMethodHeaders['segment1']=letterType;
              }

            if (letterLine1)
            {
              KSAmethodHeaders=KSAmethodHeaders.append('segment2',encodeURI(letterLine1))
              KSAletterMethodHeaders['segment2']=encodeURI(letterLine1);
            }

            if (letterLine2)
            {
              KSAmethodHeaders=KSAmethodHeaders.append('segment3',encodeURI(letterLine2))
              KSAletterMethodHeaders['segment3']=encodeURI(letterLine2);
            }



    let OthersMethodHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'wsid':AppModule.getProperty('wsid'),
      'signature':t+'',
      'Authorization': AppModule.authentication,
      'sitTitle': '' + 'Egypt Letter Request',
      'status': '' + status,
      'segment1': '' + letterType,
      'segment2': '' + encodeURI(cb),
      'segment3': '' + encodeURI(travleDestination),
      'oracle-mobile-backend-id':AppModule.backendId,
	    'resourceName' :ws
     

    });

    let OtherletterMethodHeaders = {
      'signature':encodeURI(t+''),
      'sitTitle': '' + 'Egypt Letter Request',
      'status': '' + status,
    };

    if (letterType)
    {
      OthersMethodHeaders=OthersMethodHeaders.append('segment1',letterType)
      OtherletterMethodHeaders['segment1']=letterType;
    }

  if (cb)
  {
    OthersMethodHeaders=OthersMethodHeaders.append('segment2',encodeURI(cb))
    OtherletterMethodHeaders['segment2']=encodeURI(cb);
  }

  if (travleDestination)
  {
    OthersMethodHeaders=OthersMethodHeaders.append('segment3',encodeURI(travleDestination))
    OtherletterMethodHeaders['segment3']=encodeURI(travleDestination);
  }

  


    let methodHeaders;
    let lettermethodHeaders;
    if (AppModule.getProperty('bu') == '81')
    {
      methodHeaders = UAEmethodHeaders;
      lettermethodHeaders=UAEletterMethodHeaders;
    }
    else if (AppModule.getProperty('bu') == '998')
    {
      methodHeaders = KSAmethodHeaders;
      lettermethodHeaders=KSAletterMethodHeaders;
    }
    else
    {
      methodHeaders = OthersMethodHeaders;
      lettermethodHeaders=OtherletterMethodHeaders;
    }




    return new Promise(resolve => {

      AppModule.getData(this.httpClient,this.http,ws,lettermethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
         resolve(data);
        }
         , err => {
          AppModule.showMessage(this.AlertController,'Error');
          }
    
        );
      });
     
/*
     return new Promise(resolve => {
       this.httpClient.post(url, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
          resolve(data);
          AppModule.stopLoader(loader);
        }
        , err => {
          AppModule.handleError(err,loader,this.AlertController,this.appCtrl);
     
        }
      );
      });
    */ 


  }




  async submitHousing( status: string, RequestType: string) {

 
    let ws='sshr/sit/applySITRequestPost';
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );
    

    let methodHeaders = {
      'signature':encodeURI(t+''),
      'sitTitle': '' + 'Housing Advance Request',
      'status': '' + status,
      'segment1': '' + RequestType
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



  async submitBusinessCard( status: string, CardType: string, Languages: string, englishName: string
    , arbicName: string, enJobTitle: string, arjobTitle: string, officePhone: string, ext: string
    , officeFax: string, mobile: string, email: string) {

    


      let ws='sshr/sit/applySITRequestPost';
      let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



   
    let methodHeaders=new HttpHeaders({
     // 'Content-Type':'application/json; charset=utf-8',
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' ,
      'Accept'  :'application/json; charset=utf-8',
      'Access-Control-Allow-Headers':'Content-Type' ,
      'wsid':AppModule.getProperty('wsid'),
      'signature':t+'',
      'Authorization': AppModule.authentication,
      'sitTitle':''+'Business Card',
      'status':''+status,
      'oracle-mobile-backend-id':AppModule.backendId,
	    'resourceName' :ws

     
     

                            });


   let cardmethodHeaders = {
                              'signature':encodeURI(t+''),
                              'sitTitle':''+'Business Card',
                              'status':''+status,
                            };


                            if (CardType)
                            {
                              methodHeaders=methodHeaders.append('segment12',CardType)
                              cardmethodHeaders['segment12']=CardType
                            }

                            if (Languages)
                            {
                              methodHeaders=methodHeaders.append('segment13',Languages)
                              cardmethodHeaders['segment13']=Languages
                            }

                            if (englishName)
                            {
                              methodHeaders=methodHeaders.append('segment1',encodeURI(englishName))
                              cardmethodHeaders['segment1']=encodeURI(englishName)
                            }

                            if (arbicName)
                            {
                              methodHeaders=methodHeaders.append('segment2',encodeURI(arbicName))
                              cardmethodHeaders['segment2']=encodeURI(arbicName)
                            }

                            if (enJobTitle)
                            {
                              methodHeaders=methodHeaders.append('segment3',encodeURI(enJobTitle))
                              cardmethodHeaders['segment3']=encodeURI(enJobTitle)
                            }

                            if (arjobTitle)
                            {
                              methodHeaders=methodHeaders.append('segment4',encodeURI(arjobTitle))
                              cardmethodHeaders['segment4']=encodeURI(arjobTitle)
                            }

                            if (officePhone)
                            {
                              methodHeaders=methodHeaders.append('segment7',officePhone)
                              cardmethodHeaders['segment7']=officePhone
                            }

                            if (ext)
                            {
                              methodHeaders=methodHeaders.append('segment6',ext)
                              cardmethodHeaders['segment6']=ext
                            }

                            if (officeFax)
                            {
                              methodHeaders=methodHeaders.append('segment8',officeFax)
                              cardmethodHeaders['segment8']=officeFax
                            }

                            if (mobile)
                            {
                              methodHeaders=methodHeaders.append('segment9',mobile)
                              cardmethodHeaders['segment9']=mobile
                            }
                            if (email)
                            {
                              methodHeaders=methodHeaders.append('segment10',email)
                              cardmethodHeaders['segment10']=email
                            }
                                        





                            return new Promise(resolve => {

                              AppModule.getData(this.httpClient,this.http,ws,cardmethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
                                 resolve(data);
                                }
                                 , err => {
                                  AppModule.showMessage(this.AlertController,'Error');
                                  }
                            
                                );
                              });

                            
                           



  }







}
