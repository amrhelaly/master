import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { SshrLeavesProvider } from '../../../providers/sshr-leaves/sshr-leaves';

/**
 * Generated class for the LeaveDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-leave-details',
  templateUrl: 'leave-details.html',
})
export class LeaveDetailsPage {
  selectedLeave :any;
  leaveType:any='Pending Leave';
  leaveHistory;
  constructor(public navCtrl: NavController, public navParams: NavParams , public leavesProvider : SshrLeavesProvider  ,) {

    this.selectedLeave = navParams.get('item');
    // this.leaveType = navParams.get('leaveType');
    if (navParams.get('leaveType')=='1')
    this.leaveType='Approved Leave';

    if (this.leaveType=='Pending Leave')
    {
  this.getApproversHistory();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveDetailsPage');
  }


  getApproversHistory()
  {


    try {

      this.leavesProvider.getleaveHistory(this.selectedLeave.item_type, this.selectedLeave.item_key)
        .then(data => {


          this.leaveHistory = data;
          if (this.leaveHistory && this.leaveHistory.length == 0)
            this.leaveHistory = null;
        });




    }
    catch (error) {


    }

  }

}
