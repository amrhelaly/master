import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaveUtilzationDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leave-utilzation-db',
  templateUrl: 'leave-utilzation-db.html',
})
export class LeaveUtilzationDbPage {
  allClass='marker-selected';
  DXBclass='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveUtilzationDbPage');
  }

  onAllClicked()
  {
this.allClass='marker-selected';
this.DXBclass='';

  }

  onHrClicked()
  {

    this.allClass='';
this.DXBclass='marker-selected';
  }

}
