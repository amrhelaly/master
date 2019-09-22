import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { AES256 } from '@ionic-native/aes-256';
import { HTTP   } from '@ionic-native/http';  

/*
  Generated class for the SocialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialProvider {

  constructor(public http: HTTP ,public httpClient: HttpClient ,public loadingController: LoadingController ,  public AlertController :AlertController  ,private aes256: AES256,public appCtrl :App) {
    console.log('Hello SocialProvider Provider');
  }

  async sendHappiness(faceId :string,comments:string, applicationId :string )
  {



  
    let ws='social/insertHappiness';


    let t= await AppModule.doHash(this.aes256,AppModule.getProperty('wsid')+AppModule.getAuxiliaryValue(ws) );



let methodHeaders = {
  'signature':encodeURI(t+''),
  'fcx':''+faceId+'',
  'apx': applicationId+'' 
};

if (comments)
{

methodHeaders['comments']= encodeURI(comments);
}

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
