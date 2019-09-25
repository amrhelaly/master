import  {NavController, NavParams } from 'ionic-angular';

import { StartPage } from '../../shared-pages/start/start';

import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import { ViewChild, Component } from '@angular/core';
import{MySpacePage}from '../../Scheduler/myspace/myspace'
import {MyTeamPage} from '../../Scheduler/myteam/myteam'
/**
 * Generated class for the PublicSpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-publicspace',
  templateUrl: 'publicspace.html',
})
export class PublicSpacePage {

  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.userId            =this.navParams.get('userId');  
    // this.personId          =this.navParams.get('personId'); 
    // this.businessGroup     =this.navParams.get('businessGroup'); 
    // this.assignmentId      =this.navParams.get('assignmentId'); 
  
  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad PublicSpacePage');
  }
  setBackButtonAction(){
    this.Navbar.backButtonClick = () => {
     
      this.navCtrl.push(StartPage);
   

    
     }
    }
    goMySpacePage()
    {
this.navCtrl.push(MySpacePage);
    }
    goMyTeamPage()
    {
this.navCtrl.push(MyTeamPage);
    }
  
}
