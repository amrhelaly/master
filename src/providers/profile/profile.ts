import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';
/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient  ,public loadingController: LoadingController , public AlertController :AlertController)  {
    console.log('Hello ProfileProvider Provider');
  }

  getPerssonalInfo ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getBasicDetails';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getBasicDetails'


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

  getEmplomentSummary ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getEmploymentSummary';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getEmploymentSummary'


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

  getEmplomenyeePhones ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getPhones';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getPhones'


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

  getEmplomenyeeAddresses ( businessGroup :string)
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getAddresses';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'businessGroup': businessGroup+'' ,
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getAddresses'


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

  getEmplomenyeePassportInfo ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getPassportInfo';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getPassportInfo'


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

  getEmployeeVisa ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getVisaInfo';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getVisaInfo'


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


  getDependentVisa ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getDependentVisa';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getDependentVisa'


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


  getDependentTickets ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getDependentTickets';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getDependentTickets'


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


  getEmpoyeeLaborCardInfo ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getLaborCardInfo';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getLaborCardInfo'


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

  getEmpoyeeRelationsInMBC ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getRelationsInMBC';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getRelationsInMBC'


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

  getEmpoyeegetNationalIdCard ()
  {
    let loader=AppModule.showLoader(this.loadingController );

    let url;
    if (AppModule.isCloud)
    {
      url=AppModule.wsURL;
    }
    else url =AppModule.wsURL+'/profile/info/getNationalIdCard';
   
    let methodHeaders = new HttpHeaders({
       'Content-Type':'application/json ; charset=UTF-8' ,
     'Accept':'application/json',
     'Access-Control-Allow-Headers':'Allow-Headers,Content-Type;Access-Control-Allow-origin;',
     'Access-Control-Allow-origin':'*',
     'Authorization': AppModule.authentication,
     'oracle-mobile-backend-id':AppModule.backendId,
	   'resourceName' :'profile/info/getNationalIdCard'


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




}
