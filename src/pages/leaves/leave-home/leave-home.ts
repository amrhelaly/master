import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { LeaveHistoryPage } from '../leave-history/leave-history';
import { LeaveBalancePage } from '../leave-balance/leave-balance';
import { NewLeavePage } from '../new-leave/new-leave';
import { StartPage } from '../../shared-pages/start/start';
import { ToilExpirePage } from '../toil-expire/toil-expire';
import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import { ViewChild } from '@angular/core';


/**
 * Generated class for the LeaveHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-leave-home',
  templateUrl: 'leave-home.html',
})
export class LeaveHomePage {
  userId            :string  ;
  personId          :string ;
  businessGroup     :string ;
  assignmentId      :string ;
  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.setBackButtonAction();
    console.log('ionViewDidLoad LeaveHomePage');
  }

  goPageH()
  {
   
    this.navCtrl.push(LeaveHistoryPage
      ,{ userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId});
     

  }

  goPageN()
  {

    this.navCtrl.push(NewLeavePage
      ,{ userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId});
     
  }

  goPageB()
  {

  
    this.navCtrl.push(LeaveBalancePage
      ,{ userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId});
     }



     backPage()
     {
      this.navCtrl.push(StartPage
        ,{ userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId});
       }

       setBackButtonAction(){
        this.Navbar.backButtonClick = () => {
         
          this.navCtrl.push(StartPage);
       
    
        
         }
        }
        goPageTOIL()
        {

          this.navCtrl.push(ToilExpirePage);
        }
}
