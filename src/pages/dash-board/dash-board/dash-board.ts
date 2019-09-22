import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HrDashboardPage} from '../../dash-board/hr/hr-dashboard/hr-dashboard';
import {MyRequisitionDbPage} from '../../dash-board/scm/my-requisition-db/my-requisition-db';
import {ApprovedPoDbPage} from '../../dash-board/scm/approved-po-db/approved-po-db';
import {ScmDashboardPage} from '../../dash-board/scm/scm-dashboard/scm-dashboard';
import { AppModule } from '../../../app/app.module';
/**
 * Generated class for the DashBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-dash-board',
  templateUrl: 'dash-board.html',
})
export class DashBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashBoardPage');
  }

  openHrDashboard()
  {
    this.navCtrl.push(HrDashboardPage);

  }
  openSCMdashboard()
  {

   // this.navCtrl.push(ApprovedPoDbPage);
   //this.navCtrl.push(MyRequisitionDbPage);
   this.navCtrl.push(ScmDashboardPage);
  }

}
