import { Component } from '@angular/core';
import  {NavController, NavParams ,ViewController} from 'ionic-angular';
import {WorkListPage} from '../work-list/work-list';
import {WorkListNtfProvider} from '../../../providers/work-list-ntf/work-list-ntf';
import * as $ from 'jquery';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the NtfactionSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-ntfaction-submit',
  templateUrl: 'ntfaction-submit.html',
})
export class NtfactionSubmitPage {

 title :string;
 selectedUser;
 comments :string;
 comments_class :string =null;
 notificationId :string ;

 hr :string='';
 overtime :string='';
 expenses :string='';
 requisitions :string='';
 po :string='';
 others :string='';

 constructor(public navCtrl: NavController, public navParams: NavParams , private WorkListNtf :WorkListNtfProvider
  , public viewCtrl: ViewController,public AlertController :AlertController) {
    this.title=this.navParams.get('title');
    this.selectedUser=this.navParams.get('user');
    this.notificationId=this.navParams.get('notificationId');

    this.hr=this.navParams.get('hr');
    this.overtime=this.navParams.get('overtime');
    this.expenses=this.navParams.get('expenses');
    this.requisitions=this.navParams.get('requisitions');
    this.po=this.navParams.get('po');
    this.others=this.navParams.get('others');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NtfactionSubmitPage');
  }


  takeAcion()
  {
if(!this.comments)
{

  // var el;
  // el=document.getElementsByClassName('comments')[0];
  // $(el).addClass('error-color');
  this.comments_class='error-color';
  return;
}
else
{
// submit;
this.takeReassignAction()

}

  }


  takeReassignAction()
  {

this.WorkListNtf.takeReassignAction
(this.notificationId , this.selectedUser.m ,this.comments ,this.title.toUpperCase())
       .then((data)=>{

  if (!data && data[0].value!='Success')
  {
    
    AppModule.showMessage(this.AlertController,data[0].value)

  }
else
{
  this.navCtrl.push(WorkListPage,{hr: this.hr,
    overtime :this.overtime,
    expenses :this.expenses,
    requisitions :this.requisitions,
    po :this.po,
    others :this.others});

}


       }) ;
  }
}
