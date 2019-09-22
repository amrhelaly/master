import { Component } from '@angular/core';
import  {Platform,NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import { App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LogInServiceProvider } from '../../../providers/log-in-service/log-in-service';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl :App ,private platform: Platform, public statusBar: StatusBar,public logProvider: LogInServiceProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  logOut()
  {
    //  this.navCtrl.push(HomePage).then(() => {
      
    //   this.navCtrl.remove(0,this.navCtrl.length()-1);
    // });
    //alert ('x');
    //this.navCtrl.push(HomePage);
    //this.navCtrl.remove(0,this.navCtrl.length());
   

   // this.navCtrl.setRoot(HomePage);
//this.appCtrl.getRootNav().setRoot(HomePage);
try{
  this.logProvider.logout()

  .then(async data => {

  });

}
catch(err)
{

}

this.appCtrl.getRootNav().setRoot(LoginPage);
    // if (this.platform.is('ios'))  
    //     {
    //     this.statusBar.overlaysWebView(false);
    //     this.statusBar.show();
    //     }
   }

}
