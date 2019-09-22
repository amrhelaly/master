import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyRequisitionDbPage} from '../my-requisition-db/my-requisition-db';
import {ApprovedPoDbPage} from '../approved-po-db/approved-po-db';
import {BudgetAccountPage} from '../budget-account/budget-account';


/**
 * Generated class for the ScmDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-scm-dashboard',
  templateUrl: 'scm-dashboard.html',
})
export class ScmDashboardPage {
  //searchDate :String = new Date().toISOString();
  searchDate :string;
  //myDate: String = new Date().toISOString();
  myDate: String = new Date().toString();
  date :Date;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    //this.searchDate=this.searchDate+3;
    //this.searchDate = new Date();
   // this.searchDate.setDate( this.searchDate.getDate() + 3 );
    //this.searchDate=this.searchDate.toISOString();
    //alert (this.searchDate);

//////////////////
let datex :Date=new Date();

//datex.setDate( datex.getDate() + 3 );
this.searchDate=datex.toISOString();
//alert (datex.toString());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScmDashboardPage');
  }

  openApprovedPOG()
  {
    this.navCtrl.push(ApprovedPoDbPage);
  }

  openApprovedPOL()
  {
    this.navCtrl.push(MyRequisitionDbPage);
  }

  openApprovedAcc()
  
{
  this.navCtrl.push(BudgetAccountPage);

}
onchangeDate()
{

  //alert (this.searchDate.toString());
 // this.searchDate=this.searchDate+3;
}

goNextDay()
{

  let datex :Date=new Date(this.searchDate);

  datex.setDate( datex.getDate() + 1 );
  this.searchDate=datex.toISOString();
  let formattedDate = datex.getDate() + "-" + (datex.getMonth() + 1) + "-" + datex.getFullYear();
  //alert (formattedDate);
}


goPreviousDay()
{

  let datex :Date=new Date(this.searchDate);

  datex.setDate( datex.getDate() -1 );
  this.searchDate=datex.toISOString();
  let formattedDate = datex.getDate() + "-" + (datex.getMonth() + 1) + "-" + datex.getFullYear();
 
}



}
