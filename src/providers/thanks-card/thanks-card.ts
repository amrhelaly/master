import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

/*
  Generated class for the ThanksCardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ThanksCardProvider {

  constructor(public http: HttpClient, public loadingController: LoadingController , public AlertController :AlertController) 
  {
    console.log('Hello ThanksCardProvider Provider');
  }

  getCards (cardType: string)
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/getCards';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'cardType':''+cardType+'',
     'oracle-mobile-backend-id':AppModule.backendId,
	  'resourceName' :'thanks/card/getCards'
   
   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
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

  getLeaderBoard ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/getLeaderBoard';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'thanks/card/getLeaderBoard'


   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(30000).subscribe(data => {
        resolve(data);
        AppModule.stopLoader(loader);
      }
      , err => {
     AppModule.stopLoader(loader);
     console.log(err)
       AppModule.showMessage(this.AlertController,'No Connection')
   
      }
    );
    });

  }

  getSubjectTypes ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/getSubjectTypes';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
     'resourceName' :'thanks/card/getSubjectTypes'


   
   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
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

  sendCard (toPersonId : string, subjectId : string, comments : string)
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/newCard';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'toPersonId': toPersonId+'' , 
     'subjectId': subjectId+'' , 
     'comments': encodeURI(comments+' ') , 
     'oracle-mobile-backend-id':AppModule.backendId,
    'resourceName' :'thanks/card/newCard'


   
   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
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

  checkAddCard (personId : string  )
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/checkAdd';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'personId': personId+'' ,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'thanks/card/checkAdd'

   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
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

  getRemaingCards ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/thanks/card/getRemaingCards';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'thanks/card/getRemaingCards'

   });
   
   return new Promise(resolve => {
     this.http.post(null, null, { headers: methodHeaders }).timeout(15000).subscribe(data => {
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

}
  