import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/shared-pages/login/login';
import { ListPage } from '../pages/shared-pages/list/list';
import { StartPage } from '../pages/shared-pages/start/start';
import { MainPage } from '../pages/shared-pages/main/main';
import { LeaveHistoryPage } from '../pages/leaves/leave-history/leave-history';
import { LeaveDetailsPage } from '../pages/leaves/leave-details/leave-details';
import { NewLeavePage } from '../pages/leaves/new-leave/new-leave';
import { NewLeaveSubmitPage } from '../pages/leaves/new-leave-submit/new-leave-submit'; 
import { LeaveBalancePage } from '../pages/leaves/leave-balance/leave-balance';
import { LeaveHomePage } from '../pages/leaves/leave-home/leave-home';
import { WorkListPage } from '../pages/approval-center/work-list/work-list';
import { NotificationDetailsPage } from '../pages/approval-center/notification-details/notification-details';
import { HrRequestsPage } from '../pages/hr-request/hr-requests/hr-requests';
import { LettersPreviewPage } from '../pages/hr-request/letters-preview/letters-preview';
import { LettersSubmitPage } from '../pages/hr-request/letters-submit/letters-submit';
import { HousingPreviewPage } from '../pages/hr-request/housing-preview/housing-preview';
import { HousingSubmitPage } from '../pages/hr-request/housing-submit/housing-submit';
import { BusinesscardPreviewPage } from '../pages/hr-request/businesscard-preview/businesscard-preview';
import { BusinesscardSubmitPage } from '../pages/hr-request/businesscard-submit/businesscard-submit';
import { PayrollHomePage } from '../pages/payroll/payroll-home/payroll-home';
import { BankInfoPage } from '../pages/payroll/bank-info/bank-info';
import { BankDetailsPage } from '../pages/payroll/bank-details/bank-details';
import { PayslipPage } from '../pages/payroll/payslip/payslip';
import { PayslipDetailsPage } from '../pages/payroll/payslip-details/payslip-details';
import { MorePage } from '../pages/shared-pages/more/more';
import {EmployeesPage } from '../pages/shared-pages/employees/employees';
import {NtfactionSubmitPage} from '../pages/approval-center/ntfaction-submit/ntfaction-submit';
import {ToilExpirePage} from '../pages/leaves/toil-expire/toil-expire';
import {LookUpPage} from '../pages/shared-pages/look-up/look-up';
import {ThankscardsHomePage} from '../pages/thank-u/thankscards-home/thankscards-home';
import {ThanksCardsPage} from '../pages/thank-u/thanks-cards/thanks-cards';
import {LeaderBoardPage} from '../pages/thank-u/leader-board/leader-board';
import {NewCardPage} from '../pages/thank-u/new-card/new-card';
import {DelegationHomePage} from '../pages/approval-center/delegation-home/delegation-home';
import {NewDelegationPage} from '../pages/approval-center/new-delegation/new-delegation';
import {SalaryHistoryPage} from '../pages/payroll/salary-history/salary-history';
import {ProfileHomePage} from '../pages/profile/profile-home/profile-home';
import {BasicDataPage} from '../pages/profile/basic-data/basic-data';
import {EmploymentSummaryPage} from '../pages/profile/employment-summary/employment-summary';
import {EmployeePhonePage} from '../pages/profile/employee-phone/employee-phone';
import {EmployeeAdressessPage} from '../pages/profile/employee-adressess/employee-adressess';
import {EmployeePassportPage} from '../pages/profile/employee-passport/employee-passport';
import {EmployeeVisaPage} from '../pages/profile/employee-visa/employee-visa';
import {DependentTicketsPage} from '../pages/profile/dependent-tickets/dependent-tickets';
import {LaborCardPage} from '../pages/profile/labor-card/labor-card';
import {RelationinMbcPage} from '../pages/profile/relationin-mbc/relationin-mbc';
import {NationalCardPage} from '../pages/profile/national-card/national-card';

import {DashBoardPage} from '../pages/dash-board/dash-board/dash-board';
import {HrDashboardPage} from '../pages/dash-board/hr/hr-dashboard/hr-dashboard';
import {ScmDashboardPage} from '../pages/dash-board/scm/scm-dashboard/scm-dashboard'
import {BudgetAccountPage} from '../pages/dash-board/scm/budget-account/budget-account'
import {LeaveBalanceDbPage} from '../pages/dash-board/hr/leave-balance-db/leave-balance-db'
import {BuHeadcountDbPage} from '../pages/dash-board/hr/bu-headcount-db/bu-headcount-db'
import {MyRequisitionDbPage} from '../pages/dash-board/scm/my-requisition-db/my-requisition-db'
import {AbsencCalendarDbPage} from '../pages/dash-board/hr/absenc-calendar-db/absenc-calendar-db'
import {LeaveUtilzationDbPage} from '../pages/dash-board/hr/leave-utilzation-db/leave-utilzation-db'
import {OverTimeDbPage} from '../pages/dash-board/hr/over-time-db/over-time-db'
import {RecruitmentDbPage} from '../pages/dash-board/hr/recruitment-db/recruitment-db'
import {OverTimeDbExecutivePage} from '../pages/dash-board/hr/over-time-db-executive/over-time-db-executive'
import {ExtraTimeDbPage} from '../pages/dash-board/hr/extra-time-db/extra-time-db'
import {ApprovedPoDbPage} from '../pages/dash-board/scm/approved-po-db/approved-po-db'



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogInServiceProvider } from '../providers/log-in-service/log-in-service';
import { HttpClientModule } from '@angular/common/http';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';
import { IonicStorageModule } from '@ionic/storage';
import { SshrLeavesProvider } from '../providers/sshr-leaves/sshr-leaves';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { HTTP } from '@ionic-native/http';
import {FaIconComponent} from "../components/fa-icon/fa-icon.component";
import { WorkListNtfProvider } from '../providers/work-list-ntf/work-list-ntf';
import { HrSitProvider } from '../providers/hr-sit/hr-sit';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { PayrollProvider } from '../providers/payroll/payroll';


import { DecimalPipe } from '@angular/common';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SocialProvider } from '../providers/social/social';
import { ThanksCardProvider } from '../providers/thanks-card/thanks-card';

import { TimelineComponent } from '../components/timeline/timeline';
import { TimelineTimeComponent } from '../components/timeline/timeline';
import { TimelineItemComponent } from '../components/timeline/timeline';

import { ProfileProvider } from '../providers/profile/profile';
import { DashbaordProvider } from '../providers/dashbaord/dashbaord';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
//import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AES256 } from '@ionic-native/aes-256';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as CryptoJS from 'crypto-js';

import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    StartPage,
    MainPage,
    LeaveHistoryPage,
    LeaveDetailsPage,
    NewLeavePage,
    NewLeaveSubmitPage,
    LeaveBalancePage,
    LeaveHomePage,
    WorkListPage,
    NotificationDetailsPage,
    HrRequestsPage,
    LettersPreviewPage,
    LettersSubmitPage,
    HousingPreviewPage,
    HousingSubmitPage,
    BusinesscardPreviewPage,
    BusinesscardSubmitPage,
    PayrollHomePage,
    BankInfoPage,
    BankDetailsPage,
    PayslipPage,
    PayslipDetailsPage,
    MorePage,
    EmployeesPage,
    NtfactionSubmitPage,
    ToilExpirePage,
    LookUpPage,
    ThankscardsHomePage,
    ThanksCardsPage,
    LeaderBoardPage,
    NewCardPage,
    DelegationHomePage,
    NewDelegationPage,
    SalaryHistoryPage,
    ProfileHomePage,
    BasicDataPage,
    EmploymentSummaryPage,
    EmployeePhonePage,
    EmployeeAdressessPage,
    EmployeePassportPage,
    EmployeeVisaPage,
    DependentTicketsPage,
    LaborCardPage,
    RelationinMbcPage,
    NationalCardPage,
    DashBoardPage,
    HrDashboardPage,
    ScmDashboardPage,
    BudgetAccountPage,
    LeaveBalanceDbPage,
    BuHeadcountDbPage,
    MyRequisitionDbPage,
    AbsencCalendarDbPage,
    LeaveUtilzationDbPage,
    OverTimeDbPage,
    RecruitmentDbPage,
    OverTimeDbExecutivePage,
    ExtraTimeDbPage,
    ApprovedPoDbPage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent,
    FaIconComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot() ,
    ChartsModule,
    //FormsModule,
    //HttpModule,
    //MomentModule,
    //NgIdleKeepaliveModule.forRoot()
    NgIdleKeepaliveModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    StartPage,
    MainPage,
    LeaveHistoryPage,
    LeaveDetailsPage,
    NewLeavePage,
    NewLeaveSubmitPage,
    LeaveBalancePage,
    WorkListPage,
    LeaveHomePage,
    NotificationDetailsPage,
    HrRequestsPage,
    LettersPreviewPage,
    LettersSubmitPage,
    HousingPreviewPage,
    HousingSubmitPage,
    BusinesscardPreviewPage,
    BusinesscardSubmitPage,
    PayrollHomePage,
    BankInfoPage,
    BankDetailsPage,
    PayslipPage,
    PayslipDetailsPage,
    MorePage,
    EmployeesPage,
    NtfactionSubmitPage,
    ToilExpirePage,
    LookUpPage,
    ThankscardsHomePage,
    ThanksCardsPage,
    LeaderBoardPage,
    NewCardPage,
    DelegationHomePage,
    NewDelegationPage,
    SalaryHistoryPage,
    ProfileHomePage,
    BasicDataPage,
    EmploymentSummaryPage,
    EmployeePhonePage,
    EmployeeAdressessPage,
    EmployeePassportPage,
    EmployeeVisaPage,
    DependentTicketsPage,
    LaborCardPage,
    RelationinMbcPage,
    NationalCardPage,
    DashBoardPage,
    HrDashboardPage,
    ScmDashboardPage,
    BudgetAccountPage,
    LeaveBalanceDbPage,
    BuHeadcountDbPage,
    MyRequisitionDbPage,
    AbsencCalendarDbPage,
    LeaveUtilzationDbPage,
    OverTimeDbPage,
    RecruitmentDbPage,
    OverTimeDbExecutivePage,
    ExtraTimeDbPage,
    ApprovedPoDbPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    Transfer,
    Camera,
    FilePath,
    WheelSelector,
    LogInServiceProvider,
    FingerprintAIO,
    DecimalPipe,
    SshrLeavesProvider,
    WorkListNtfProvider,
    HrSitProvider,
    HTTP,
    NativeHttpModule, NativeHttpBackend, NativeHttpFallback,
    PayrollProvider,
    SocialProvider,
    ThanksCardProvider,
    ProfileProvider,
    DashbaordProvider,
    AES256
  ]
})
export class AppModule {

  

         
 


 static wsURL : string ='https://FAEE5CBB8B4248F4BDB7C0B0043D61D9.mobile.ocp.oraclecloud.com:443/mobile/custom/MBCWSAPI';
 static authentication : string = 'Basic RkFFRTVDQkI4QjQyNDhGNEJEQjdDMEIwMDQzRDYxRDlfTW9iaWxlQW5vbnltb3VzX0FQUElEOjJiYjcxZDg4LTZiZGItNDZiZi04YzM1LTI2OGFlYzgwNTUyMQ=='
 static isCloud :boolean=true;
 static backendId:string ='05fb4316-2c8d-46dc-aafd-3c0ff61a7b61';

 

//Basic QW1oZWxhbHk6QW1yMDExNDMxNyRSZXZhMjAxNQ==

//  static wsURL : string ='http://10.10.131.34:7003/mbcWebserviceP/resources';
//  //static wsURL : string ='https://130.61.57.155/mbcWebserviceP/resources'; 
//  static authentication : string = 'Basic QW1oZWxhbHk6QW1yMDExNDMxNyRSZXZhMjAxNQ==';//'Basic V1NNb2JpbGV1c2VyOm1iY0BFUlBXU1VzZXIxOTE4'
//  static isCloud :boolean=false;
//  static backendId:string ='';



//   static wsURL : string ='https://jcsapps-mbccloudservices.jcs.ocp.oraclecloud.com/mbcWebserviceP/resources';
//  static authentication : string = 'Basic d2VibG9naWM6U2ltcGxlNFUxXyMj'
//  static isCloud :boolean=false;
//  static backendId:string ='05fb4316-2c8d-46dc-aafd-3c0ff61a7b61';



  static appVersion :string ='1.0.0'
  static businessGroup : string;

  static notificationNO :number=0;

  static mode :number=0;
  static platform=1;
  static index=16;


  static directorateType : string='NotArabiya';



  static showLoader (loadingController: LoadingController )
  {
    if (!loadingController)
    return null;

  let  loader=  loadingController.create({
      spinner: 'hide',
      content: `
  
    <div class="la-ball-scale-ripple-multiple la-dark la-2x">
    <div></div>
    <div></div>
    <div></div>
</div>
       
        
      </div>`,

     });  

     loader.present();
     return loader;

  }

  static stopLoader (loader)
  {
  
 if (loader)
    loader.dismiss();

  }

  static showMessage(alertCtrl :AlertController , message :string  ) {
   if (!alertCtrl)
   return;
    let confirm = alertCtrl.create({
      title: null,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  static showUpdateMessage(alertCtrl :AlertController , message :string  ) {
    let confirm = alertCtrl.create({
      title: null,
      message: message,
      buttons: [
        {
          text: 'Update',
          handler: () => {
               window.open("http://10.10.131.26:7003/mobile/index.html",'_system', 'location=yes');
          }
        }
      ]
    });
    confirm.present();
  }

// new changes 
static attr :Array<{seq :number  ,propertyName :string , propertyValue : string}>;

static doRev( str)
{
 
    if (str === "") 
      return "";
    
    else
      return this.doRev(str.substr(1)) + str.charAt(0);
}

static getComplex( length)
{
  var str = "";
  for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ) );
  return str.substr( 0, length );

}

static getProperty (propertyName)
{

if (!this.attr ||this.attr.length==0 ||!propertyName)
return;
  var propertyValue = this.attr.find(item=>item.propertyName == propertyName).propertyValue;
  return propertyValue;

}
static intializeData (data)
{
  if (!data|| data.length==0)
  return;
  this.attr=[];

  console.log (data)
  for (var i=0;i<data.length;i++)
  {



this.attr.push({seq:data[i].sequence_no ,propertyName:data[i].property_name , propertyValue:data[i].property_value });
if (data[i].property_name=='NTF_NO')
window.localStorage.setItem('noOfNotifications', data[i].property_value);

if (data[i].property_name=='bu')
this.businessGroup= data[i].property_value;

if (data[i].property_name=='ref1')
{
  let t= this.doRev(data[i].property_value.substr(0, 32));
  this.attr.push({seq:data[i].sequence_no ,propertyName:'reference' , propertyValue:t });
  this.attr.push({seq:data[i].sequence_no ,propertyName:'ref', propertyValue:data[i].property_value.substr(32, 48) });
}

  }

 


}

static async  doHash(aes256 , data  ) {
  
  
  
if (this.platform==2) 
{

  return new Promise(resolve => {
    aes256.encrypt( this.getProperty('reference'), this.getProperty('ref'), data)
      .then(res =>{ 
    
              resolve(res);
                }
)
  .catch((error: any) => resolve('error'));

  });
}
else
{
 
  var k = CryptoJS.enc.Utf8.parse(this.getProperty('reference'));
  var v = CryptoJS.enc.Utf8.parse(this.getProperty('ref'));
  var message = data;
  
  var encrypted = CryptoJS.AES.encrypt(message, k, {
    iv: v
  });

  return encrypted;

}

}


static async  doHashing(data ,k , v ) {
  
  var ks = CryptoJS.enc.Utf8.parse(k);
  var vs = CryptoJS.enc.Utf8.parse(v);

    var message = data;
    
    var encrypted = CryptoJS.AES.encrypt(message, ks, {
      iv: vs
    });
  
    return encrypted;
  
  
  
  }


/*
static async getValue(aes256)
{

  let t=  await this.encrypty(aes256 );
  return t;
}
*/
static getAuxiliaryValue (data)
{

  if(!data)
  return '';
  return data.substr( data.lastIndexOf("/") +1);



}
static logOut(appCtrl)
{

  appCtrl.getRootNav().setRoot(LoginPage);
}

static handleError(err,loader,AlertController,appCtrl)
{
 
  let message='';
  if (this.mode==0)
  message=err.message
  else
  message=err.error

  if(loader)
  this.stopLoader(loader);
  if (err.status=='401')
  {
  AppModule.showMessage(AlertController,'Session Expired');
  this.logOut(appCtrl);
  }
  else if (err.status=='400')
  {
    AppModule.showMessage(AlertController,message);
    this.logOut(appCtrl);
  }
  else
 AppModule.showMessage(AlertController,'No Connection')
}

 
static tobase64(p:string)
{
  var b = new Buffer(p);
  var s = b.toString('base64');
  return s;

}

static  getData(httpClient,http ,ws, methodHeaders,loadingController,AlertController,appCtrl) {


  
  let token=null;
  try {
    
 token=this.getProperty('wsid');
if (token)
token=encodeURI(token);
else
token=null; 
  }
catch (error) {
  
}

methodHeaders['Content-Type']='application/json ; charset=UTF-8';

methodHeaders['Accept']='application/json';

methodHeaders['Authorization']=this.authentication+'';

methodHeaders['oracle-mobile-backend-id']=this.backendId;

methodHeaders['resourceName']=ws;

if (token)
methodHeaders['wsid']=token;

   
  let loader=this.showLoader(loadingController );

  let url;

if (this.isCloud)
{
url=this.wsURL;

}
else
{
url =this.wsURL+'/'+ws;

}

   

 
 if (this.mode==0)
 {

 let r;
 return new Promise(resolve => {
  httpClient.post(url, null, { headers: new HttpHeaders(methodHeaders) }).timeout(30000).subscribe(data => {
      resolve(data);
      this.stopLoader(loader);
    }
    , err => {
      this.handleError(err,loader,AlertController,appCtrl);

 
    }
  );
  });
 
 } else
 {


  http.setSSLCertMode('pinned');
  http.clearCookies();
  
     return new Promise(resolve => {
       http.post(url, {}, methodHeaders).then(data => {
        resolve(JSON.parse(data.data));
        this.stopLoader(loader);
 
        }
        , err => {
          AppModule.handleError(err,loader,AlertController,appCtrl);
     
        }
      );
      });


 }


}

}
