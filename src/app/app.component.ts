import { Component, ViewChild } from '@angular/core';
import { Nav, Platform  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Rx';
import { LoginPage } from '../pages/shared-pages/login/login';
import { StartPage } from '../pages/shared-pages/start/start';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import { App } from 'ionic-angular';
import {ScmDashboardPage} from '../pages/dash-board/scm/scm-dashboard/scm-dashboard'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  mySplashScreen=true;
  rootPage: any = LoginPage;//ScmDashboardPage;//LeaveUtilzationDbPage;//MyRequisitionDbPage;//LeaveBalanceDbPage;//LoginPage;  

  pages: Array<{title: string, component: any}>;
  // idleState = 'Not started.';
  // timedOut = false;
  // lastPing?: Date = null;

  idleState = 'Not started.';
timedOut = false;
min:any;
sec;any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , private idle: Idle , public appCtrl :App ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: LoginPage },
      { title: 'start', component: StartPage }
    ];


    // this.idle.setIdle(5);  //after 5 sec idle
    // this.idle.setTimeout(30*60);  //5min countdown
    // this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    
    // this.idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    // this.idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Timed out!';
    //   this.timedOut = true;
    //  // alert ('idle')
    //  // this.navCtrl.pop();  //go to logout page after 5 min idle.
    //  //this.appCtrl.getRootNav().setRoot(HomePage);
    //  this.nav.setRoot(HomePage);
    //  //this.initializeApp();
    //  //this.navCtrl.setRoot(HomePage);
    //  //this.navCtrl.popToRoot();
    //  this.reload();
    // });
    // this.idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    // this.idle.onTimeoutWarning.subscribe((countdown) => {
    
    
    //     var data=countdown/60;
    //     this.min=data.toString().split('.')[0];
    //     this.sec=     parseFloat(0+'.'+data.toString().split('.')[1])*60;
    //     this.sec=  (Math.round(this.sec * 100) / 100);
    //     console.log(countdown)
    
    //   this.idleState = 'You ll logout in ' + this.min+' min ' +this.sec+'  seconds!';
    // });
    //    this.reload();


    //    platform.ready().then(() => {

    //     if (platform.is('cordova')){
  
    //       //Subscribe on pause
    //       this.platform.pause.subscribe(() => {
    //       console.log('pause')
    //       });
  
    //       //Subscribe on resume
    //       this.platform.resume.subscribe(() => {
    //         console.log('resume')
    //         window['paused'] = 0;
    //       });
    //      }
    //   });

  }

  reload() {
    this.idle.watch();
    this.idleState = 'Started';
    this.timedOut = false;
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //  this.mySplashScreen=false;
      
    if (this.platform.is('ios'))  
    {
    this.statusBar.overlaysWebView(false);
    }
    if (!this.platform.is('ios'))  
          {
            this.statusBar.hide();
          } 
      this.statusBar.backgroundColorByHexString("#353D4e");
      this.splashScreen.hide();
      Observable.interval(1).subscribe(()=>this.mySplashScreen=false);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout()
  {

    
  }
}
