import { Component } from '@angular/core';
import  {NavController, NavParams , ViewController } from 'ionic-angular';
import {WorkListNtfProvider}  from '../../../providers/work-list-ntf/work-list-ntf';
import {NtfactionSubmitPage} from '../../approval-center/ntfaction-submit/ntfaction-submit';
import {NewCardPage} from '../../thank-u/new-card/new-card';
import { AppModule } from '../../../app/app.module';

/**
 * Generated class for the NotificationActionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  title :string;
  allUsers;
  users;
  filteredUsers;
  fromR=0;
  v_step=10;
  toR=this.v_step;
  notificationId;
  callingType: number;

  hr :string='';
  overtime :string='';
  expenses :string='';
  requisitions :string='';
  po :string='';
  others :string='';

  constructor(public navCtrl: NavController, public navParams: NavParams , private ntfData:WorkListNtfProvider , public viewCtrl: ViewController ) {
  this.title=this.navParams.get('title');
  this.callingType=this.navParams.get('callingType');
  this.notificationId=this.navParams.get('notificationId');

      
  this.hr=this.navParams.get('hr');
  this.overtime=this.navParams.get('overtime');
  this.expenses=this.navParams.get('expenses');
  this.requisitions=this.navParams.get('requisitions');
  this.po=this.navParams.get('po');
  this.others=this.navParams.get('others');
  
  this.getUsres();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationActionsPage');
  }

  getUsres()
  {
    try{
      this.ntfData.getUsers()
      
      .then(data => {
        
      this.allUsers= data;
      this.users= this.allUsers.slice(this.fromR,this.toR);

      //this.users.concat(this.allUsers.slice(this.fromR,this.toR));//= this.allUsers.slice(this.fromR,this.toR);
   
        
      });
    }
    catch (error)
    {
    
      //this.showToast('middle','Connection Problem');
      alert (error);
    }
  }

  onInput(ev: any)
  {
   
   if(!this.users)
   {
     return;
   }
   
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.filteredUsers = this.allUsers.filter((item) => {
        return ((item.g+item.j+item.m).toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      if (this.filteredUsers)
      {
        this.users=this.filteredUsers.slice(0,this.v_step);
      }
    }
   else
   {
    this.fromR=0;
    this.toR=this.v_step;
    this.users=this.allUsers.slice(0,this.v_step);
   }
  }


  doInfinite(infiniteScroll) {


   // this.fromR=this.fromR+this.v_step;
    this.toR=this.toR+this.v_step;


    try{

      if (this.filteredUsers)
      {
        this.users=(this.filteredUsers.slice(0 ,this.toR));
      }
      else
      {
      this.users=(this.allUsers.slice(0 ,this.toR));
      }
      infiniteScroll.complete();
  }
    catch (err)
    {
      
    }
    
  }

  userTapped(event , user)
  {
if (this.callingType==1)
{
  let data = { user :user };
  this.viewCtrl.dismiss(data);
}
// thank you card
else if (this.callingType==3)
{
this.navCtrl.push(NewCardPage , {user : user } );
}
else
this.navCtrl.push(NtfactionSubmitPage , {title :this.title , user : user ,notificationId :this.notificationId ,hr: this.hr,
  overtime :this.overtime,
  expenses :this.expenses,
  requisitions :this.requisitions,
  po :this.po,
  others :this.others})
  }

  dismiss()
  {
    this.viewCtrl.dismiss();

  }
}
