import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { LeaveHomePage } from '../../leaves/leave-home/leave-home';
import { WorkListPage } from '../../approval-center/work-list/work-list';
import { HrRequestsPage } from '../../hr-request/hr-requests/hr-requests';
import { PayrollHomePage } from '../../payroll/payroll-home/payroll-home';
import { ProfileHomePage } from '../../profile/profile-home/profile-home';
import {ThankscardsHomePage} from '../../thank-u/thankscards-home/thankscards-home';
import {DashBoardPage} from '../../dash-board/dash-board/dash-board';
import { AppModule } from '../../../app/app.module';

//AA
import { PublicSpacePage } from  '../../Scheduler/publicSpace/publicspace'

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})

export class StartPage {
  searchItem :String;
  items: Array<string> = ['ApprovalCenter', 'Profile',  'Leaves','Payroll', 'HRrequests','Expense' ,'Dashboard','Scheduler','thanksCard'];


  isHidden: any[];
  isExecutive:string;
  isAA:string;
  

  addURL='http://www.mbc.net/en/privacy';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
this.isHidden=[];
this.isExecutive=AppModule.getProperty('isExecutive');
this.isAA=AppModule.getProperty('AAorganization');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  goPage(pageName :any)
  {
    pageName=LeaveHomePage;
 this.navCtrl.push(pageName
   ,{ });
  }


  openApprovalCenter()
  {
    
 this.navCtrl.push(WorkListPage
   ,{ });
  }

  openHRrequest()
  {
    
 this.navCtrl.push(HrRequestsPage
   ,{ });
  }
  arrCompare (arr1: Array<string> )
  {
    // var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    // var a2 = ['a', 'b', 'c', 'd', 'z', 'hey', 'there'];
    
    var p1 =this.items;
    var p2 =arr1;
    var i:number; 
    var x;
    console.log('p2');
    console.log(p2);
    // hide 
    if (p2!=null )
    {
    let hide = p1.filter(item => p2.indexOf(item) < 0);
    console.log('hide');
    console.log(hide);
    
    
    for(i = 0;i<hide.length;i++) {
      console.log(hide[i]);
      x=document.getElementById(hide[i]);
      x.style.display="none";
   }

  for(i = 0;i<arr1.length;i++) {
    console.log(arr1[i]);
    x=document.getElementById(arr1[i]);
    x.style.display="inline-block";
 }
    }
    else
    {

      for(i = 0;i<this.items.length;i++) {
        console.log(this.items[i]);
        x=document.getElementById(this.items[i]);
        x.style.display="inline-block";
     }

    }
  }

  arrCompare2 (arr1: Array<string> )
  {
    // var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    // var a2 = ['a', 'b', 'c', 'd', 'z', 'hey', 'there'];
    
    var p1 =this.items;
    var p2 =arr1;
    var i:number; 
    var x;
    console.log('p2');
    console.log(p2);
    // hide 
    if (p2!=null )
    {
    let hide = p1.filter(item => p2.indexOf(item) < 0);

    
    
    for(i = 0;i<hide.length;i++) {
    
      //x=document.getElementById(hide[i]);
     // x.style.display="none";
     var t = p1.indexOf(hide[i]);
     this.isHidden[t]=true;
   }

  for(i = 0;i<arr1.length;i++) {
    
   // x=document.getElementById(arr1[i]);
    //x.style.display="inline-block";
    var t = p1.indexOf(arr1[i]);
    this.isHidden[t]=false;
 }
    }
    else
    {

      for(i = 0;i<this.items.length;i++) {
        console.log(this.items[i]);
     //   x=document.getElementById(this.items[i]);
      //  x.style.display="inline-block";
      this.isHidden[i]=false;
     }

    }
  }


  onInput(ev: any)
  {
   let filterItems: Array<string> ;
    console.log('xx'+this.searchItem);
    let val = ev.target.value;
    console.log('vv '+val);
    if (val && val.trim() !== '') {
      filterItems= this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }

    this.arrCompare2(filterItems);
    console.log('ff '+this.items);
  // var x;
    //var y;
    //x=document.getElementById("yyx");
   // if (val=='1')
   // x.style.display="none";
  //  else
   // x.style.display="inline-block";
    // y=document.getElementById("ProfileTxt");
    // y.style.display="none";
  }
 
  onCancel()
  {
    console.log('yy'+this.searchItem);
    var x;
    var y;
    x=document.getElementById("Profile");
    x.style.display="inline-block";
    // y=document.getElementById("ProfileTxt");
    // y.style.display="inline-block";
  }
  openPayroll()
  {
    this.navCtrl.push(PayrollHomePage);
  }

  openThanks()
  {
    this.navCtrl.push(ThankscardsHomePage);
  }

  openProfile()
  {
    this.navCtrl.push(ProfileHomePage);
  }

  openDashBoard()
  {
    this.navCtrl.push(DashBoardPage);

  }
  
  // added by Heba 13-may-2019
  goPublicSpace()
  {
    
 this.navCtrl.push(PublicSpacePage);
  }

}
