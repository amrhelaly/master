import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LeaveBalanceDbPage} from '../leave-balance-db/leave-balance-db';
import {BuHeadcountDbPage} from '../bu-headcount-db/bu-headcount-db';
import {AbsencCalendarDbPage} from '../absenc-calendar-db/absenc-calendar-db';

import {LeaveUtilzationDbPage} from '../leave-utilzation-db/leave-utilzation-db';
import {OverTimeDbPage} from '../over-time-db/over-time-db';
import {RecruitmentDbPage} from '../recruitment-db/recruitment-db';
import {OverTimeDbExecutivePage} from '../over-time-db-executive/over-time-db-executive';
import {ExtraTimeDbPage} from '../extra-time-db/extra-time-db';

import { AppModule } from '../../../../app/app.module';
/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hr-dashboard',
  templateUrl: 'hr-dashboard.html',
})
export class HrDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrDashboardPage');
  }

  openleaveBalanceDB()
  {
    this.navCtrl.push(LeaveBalanceDbPage);
  }
  openHeadCountDB()
  {

    this.navCtrl.push(BuHeadcountDbPage);
  }

  openabsenceCalendar()
  {
    this.navCtrl.push(AbsencCalendarDbPage);

  }

  openLeaveUtilization()
  {
    this.navCtrl.push(LeaveUtilzationDbPage);

  }

  openOverTime()
  {
    this.navCtrl.push(OverTimeDbPage);

  }

  openRecruitment()
  {
    this.navCtrl.push(RecruitmentDbPage);

  }

  openOverTimeExecutive()
  {
    this.navCtrl.push(OverTimeDbExecutivePage);

  }

  openextraTimeWorked()
  {

    this.navCtrl.push(ExtraTimeDbPage);
  }

  
}
