import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
import { HTTP   } from '@ionic-native/http';  

import { AES256 } from '@ionic-native/aes-256';
import { App } from 'ionic-angular';

@Injectable()
export class LogInServiceProvider {

  logWSURL = AppModule.wsURL+'/RESTWs/getlogin?userName='; 



  
  constructor(public http: HTTP ,public httpClient: HttpClient,public loadingController: LoadingController ,  public AlertController :AlertController,private aes256: AES256,public appCtrl :App) {

  }

  
  async xx( v_start , v_end ) {

   


      return new Promise(resolve => {
        this.httpClient.get('https://www.openpowerlifting.org/api/rankings?start='+v_start+'&end='+v_end+'&lang=en&units=lbs', { }).timeout(30000).subscribe(data => {
         
        // console.log(JSON.stringify(data));
        // console.log('data'); 
        // console.log(data);  
        let x= JSON.stringify(data);
       
        x=x.replace('{"total_length":240707,"rows":[','');
        x=x.replace(']}','');
       //  x=x.replace(/],[/g,';')
       
       //  x=x.replace([/gi,'');
        // x=x.replace(']','')
        //  x=x.replace('}','')
        //  x=x.replace('{','')
        //  x=x.replace(']]','')
        //  x=x.replace(',[',';')
       
       // x=x.replace(/]/g,'')
        
        
        resolve(x);
             
           
          }
          , err => {
            
      
        
          }
        );
        });


    }
  


  async getUserAuthentication( user :string , userPass: string  ) {


   
let k=AppModule.getComplex(AppModule.index*2);
let v=AppModule.getComplex(AppModule.index);

    let t= await AppModule.doHashing(userPass ,k,v);

    let signature=AppModule.doRev(k)+v+AppModule.getComplex(976);


   let ws='RESTWs/authenticate';

   

  let authMethodHeaders = {
    's': user,
    'av': AppModule.appVersion,
    'a':encodeURI(t),
    'signature':encodeURI(signature),
  };
 
  

  return new Promise(resolve => {

    AppModule.getData(this.httpClient,this.http,ws,authMethodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
      AppModule.intializeData(data); 
      resolve(data);
      }
       , err => {
        AppModule.showMessage(this.AlertController,'Error');
        }
  
      );
    });
    
  }

  async registerAio( userPass: string  ) {
   
  
    
    let ws='RESTWs/registerAio';
 
    let t= await AppModule.doHash(this.aes256,userPass );


    let methodHeaders = {
      'signature':encodeURI(t+''),
     
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

    loginAio( tk , signature ) {
   
  
    
    let ws='RESTWs/loginAio';
 


   
    let methodHeaders = {
    
      'signature':encodeURI(signature+''),
      'tk':encodeURI(tk+''),
      'av': AppModule.appVersion
    };
 

  
 
   return new Promise(resolve => {
 
     AppModule.getData(this.httpClient,this.http,ws,methodHeaders,this.loadingController,this.AlertController,this.appCtrl).then(data => { 
      AppModule.intializeData(data); 
       resolve(data);
       }
        , err => {
         AppModule.showMessage(this.AlertController,'Error');
         }
   
       );
     });
     
   }




   async logout(  ) {
   
  
    
    let ws='RESTWs/logout';
 
    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );


    let methodHeaders = {
      'signature':encodeURI(t+''),
     
    };
 

  
 
   return new Promise(resolve => {
 
     AppModule.getData(this.httpClient,this.http,ws,methodHeaders,null,null,this.appCtrl).then(data => { 
       
       resolve(data);
       }
        , err => {
         AppModule.showMessage(this.AlertController,'Error');
         }
   
       );
     });
     
   }


}
