import { Component, ViewChild, ElementRef } from '@angular/core';
import  {NavController, NavParams, ItemSliding, Platform, ActionSheetController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkListNtfProvider } from '../../../providers/work-list-ntf/work-list-ntf';
import { LoadingController } from 'ionic-angular';
import { NotificationDetailsPage } from '../notification-details/notification-details';
import { EmployeesPage } from '../../shared-pages/employees/employees';
import {DelegationHomePage} from '../delegation-home/delegation-home';
import { PopoverController, ViewController } from 'ionic-angular';
import { StartPage } from '../../shared-pages/start/start'
import { AppModule } from '../../../app/app.module';
import * as $ from 'jquery';
import { filter } from 'rxjs/operator/filter';
import { Navbar } from 'ionic-angular';

import { AlertController } from 'ionic-angular';



/**
 * Generated class for the WorkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-work-list',
  templateUrl: 'work-list.html',
})

export class WorkListPage {
  //@ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild(Navbar) Navbar: Navbar;
  chats: any[];
  logins: any[];
  moreActions: any[];

  isHidden: any[];

  public mm: string = `  background-color: red;`;
  public uu: string =
    ``;


  pp;
  test1: any;
  test2: any;
  test3: any;
  v_step: number = 200;
  fromR: number = 1;
  toR: number = this.v_step;
  searchItem;

  // filters
  showSearch: boolean = true;
  othersClass = 'ico-fa-btn1';
  otherIcon;

  POClass = 'ico-fa-btn1 ';
  POIcon;

  requisitionsClass = 'ico-fa-btn1 ';
  requisitionsIcon;

  expensesClass = 'ico-fa-btn1 ';
  expensesIcon;

  overtimeClass = 'ico-fa-btn1 ';
  overtimeIcon;

  HRClass = 'ico-fa-btn1 ';
  HRIcon;

  filterIcon = 'vlight';


  hr: string = '';
  overtime: string = '';
  expenses: string = '';
  requisitions: string = '';
  po: string = '';
  others: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitized: DomSanitizer,
    public platform: Platform, public actionsheetCtrl: ActionSheetController, public workListProvider: WorkListNtfProvider
    , public loadingController: LoadingController, public popoverCtrl: PopoverController, public AlertController: AlertController
  ) {
    this.showSearch = true;
    this.hr = this.navParams.get('hr');
    this.overtime = this.navParams.get('overtime');
    this.expenses = this.navParams.get('expenses');
    this.requisitions = this.navParams.get('requisitions');
    this.po = this.navParams.get('po');
    this.others = this.navParams.get('others');


    this.pp = this.sanitized.bypassSecurityTrustHtml(this.uu);
    this.isHidden = [];
    try {
      this.workListProvider.getWorkListPost(this.fromR + '', this.toR + '')

        .then(data => {

          this.test1 = data;
          this.test2 = data;
          this.test3 = data;
          // try{

          this.intializeFilter();
          this.applyfilter();
          // }
          //catch(err)
          //{

          //}
        });
    }
    catch (error) {
      console.log('errorx1');
      console.log(error);
      AppModule.showMessage(this.AlertController, 'Error:' + error.message);


    }

    try {
      this.workListProvider.getWorkListcountPost()

        .then(data => {
          window.localStorage.setItem('noOfNotifications', data[0].ntf);


          //  console.log(data);
        });
    }
    catch (error) {
      AppModule.showMessage(this.AlertController, 'Error:' + error.message);

    }

    this.chats = [
      {
        img: './assets/avatar-cher.png',
        name: 'Cher',
        message: 'Ugh. As if.',
        time: '9:38 pm'
      }, {
        img: './assets/avatar-dionne.png',
        name: 'Dionne',
        message: 'Mr. Hall was way harsh.',
        time: '8:59 pm'
      }, {
        img: './assets/avatar-murray.png',
        name: 'Murray',
        message: 'Excuse me, "Ms. Dione."',
        time: 'Wed'
      }];

    this.logins = [
      {
        icon: 'logo-twitter',
        name: 'Twitter',
        username: 'admin',
        a: 0,
        actions: [{ x: 'trash', y: 1, z: 'secondary', a: 0 }, { x: 'menu', y: '2', z: 'danger', a: 0 }, { x: 'trash', y: 3, z: 'dark', a: 0 }]
      }, {
        icon: 'logo-github',
        name: 'GitHub',
        username: 'admin37',
        a: 0,
        actions: [{ x: 'trash', y: 4, z: 'dark', a: 0 }, { x: 'menu', y: '5', z: 'danger', a: 0 }, { x: 'volume-off', y: 6, z: 'dark', a: 0 }]
      }, {
        icon: 'logo-instagram',
        name: 'Instagram',
        username: 'imanadmin',
        a: 0,
        actions: [{ x: 'volume-off', y: 2, z: 'danger', a: 0 }, { x: 'trash', y: 'bb', z: 'dark', a: 0 }]
      }, {
        icon: 'logo-codepen',
        name: 'Codepen',
        a: 1,
        username: 'administrator',
        actions: [{ x: 'menu', y: 7, z: 'danger', a: 0 }, { x: 'trash', y: '8', z: 'secondary', a: 0 }, { x: 'trash', y: 9, z: 'dark', a: 0 }]
      }];

    // action sheet 
    this.moreActions = [
      {
        text: 'Delete',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          console.log('Share clicked');
        }
      },
      {
        text: 'Play',
        icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        handler: () => {
          console.log('Play clicked');
        }
      },
      {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]

  }

  ionViewDidLoad() {

    //let m;
    // m=document.getElementById("ix");

    this.setBackButtonAction();

    //   m.innerHtml=this.uu;
    console.log('ionViewDidLoad WorkListPage');
  }


  more(item: ItemSliding) {
    console.log('More');
    console.log(item);
    item.close();
  }

  morex(item: ItemSliding, wf, bu, i) {
    console.log('Morex');
    console.log(wf.subject);
    console.log(bu.button_name);
    if (bu.button_name == 'MORE') {
      this.openMenu(item, wf, i);

    }


    else if (bu.button_name == 'MORE_INFORMATION_REQUEST') {

      this.takeReaasignAction('More Information', wf.notification_id);
    }

    else if (bu.button_name == 'REASSIGN') {
      this.takeReaasignAction('Reassign', wf.notification_id);
    }
    else {
      //change
      //this.isHidden[i]=true;
      // item.setElementClass("oo" ,true);

      //   setTimeout(() => {
      //   // item.setElementClass("oo1" ,true);
      //  // this.isHidden[i]=true;  // sidar idea
      //   }, 250);
      //  item.close();
      this.takeNotificationAction(item, wf.notification_id, wf.item_type, wf.item_key, wf.process_activity, bu.button_name, i);
    }
  }




  openMenu(item, wf, index) {

    let bu = wf.more_actions;
    this.moreActions = [];
    for (let i = 0; i < bu.length; i++) {
      this.moreActions.push({
        text: bu[i].button_label
        , icon: !this.platform.is('ios') ? bu[i].button_icon : null
        , handler: () => { this.actionSheetHandler(bu[i].button_name, item, wf, index) }
      });
    }

    // adding cancel 
    this.moreActions.push({
      text: 'Cancel',
      role: 'cancel', // will always sort to be on the bottom
      icon: !this.platform.is('ios') ? 'close' : null,
      handler: () => { this.actionSheetHandler('cancel', item, wf, index) }
    });


    let actionSheet = this.actionsheetCtrl.create({
      // title: 'Actions',
      //cssClass: 'action-sheets-basic-page',
      buttons: this.moreActions
    });
    actionSheet.present();
  }


  actionSheetHandler(act, item, wf, index) {

    console.log(act);

    if (act == 'cancel')
      null;
    else if (act == 'MORE_INFORMATION_REQUEST') {
      this.takeReaasignAction('More Information', wf.notification_id);
    }

    else if (act == 'REASSIGN') {
      this.takeReaasignAction('Reassign', wf.notification_id);
    }
    else {
      this.takeNotificationAction(item, wf.notification_id, wf.item_type, wf.item_key, wf.process_activity, act, index);
      //  item.setElementClass("oo" ,true);
      //  setTimeout(() => {
      //   item.setElementClass("oo1" ,true);
      //  }, 999);
      // item.close();

    }

  }


  validateBeforeAction(buttonName) {

    // check request More Info Replay 
    if (buttonName && buttonName == 'SUBMIT') {

      AppModule.showMessage(this.AlertController, 'Please open the notification and take this action inside');
      return 0;

    }


    // check Forward 

    if (buttonName && buttonName.indexOf('FORWARD') > 1) {


      AppModule.showMessage(this.AlertController, 'Please open the notification and take this action inside');
      return 0;

    }


    return 1;

  }


  takeNotificationAction(item, notificationId, itemType, itemKey, activityId, buttonName, i) {

    let validated = this.validateBeforeAction(buttonName);
    if (validated == 0)
      return;


    try {

      this.workListProvider.takeAction(notificationId, itemType, itemKey, activityId, buttonName, 'none')
        .then(data => {
          if (data[0].message == '0') {


            AppModule.showMessage(this.AlertController, data[0].value)
            return;
          }
          else {
            // update count here 
            window.localStorage.setItem('noOfNotifications', data[0].message);

            this.isHidden[i] = true;
          }

        });


    }
    catch (error) {

      AppModule.showMessage(this.AlertController, 'Error:' + error.message);

    }

  }

  noticationTapped(event, wf) {

    if (!wf.generator_api) {

      AppModule.showMessage(this.AlertController, 'Notification deatils are not available ');
      return;
    }

    //window.localStorage.setItem('noOfNotifications' ,'10');

    try {

      this.workListProvider.getNoticationBody(wf.notification_id, wf.item_type, wf.item_key, wf.generator_api)
        .then(data => {


          // console.log('datax :' + data[0].html_data  );
          this.navCtrl.push(NotificationDetailsPage, {
            notificationBody: data[0].html_data,
            moreActions: wf.more_actions,
            baseActions: wf.base_actions,
            wf: wf,
            hr: this.hr,
            overtime: this.overtime,
            expenses: this.expenses,
            requisitions: this.requisitions,
            po: this.po,
            others: this.others
          });

        });


    }
    catch (error) {



      AppModule.showMessage(this.AlertController, 'Error:' + error.message);

    }

  }

  onInput(ev: any) {

    if (!this.test1) {
      return;
    }

    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.test1 = this.test1.filter((item) => {
        let itemData = '-';;
        if (item.from_user)
          itemData = itemData + item.from_user.toLowerCase();
        if (item.subject)
          itemData = itemData + item.subject.toLowerCase();

        return ((itemData).indexOf(val.toLowerCase()) > -1);
      })
    }
    else
      this.test1 = this.test3;
  }

  onCancel(ev: any) {


    AppModule.showMessage(this.AlertController, 'Cancel');


  }


  doInfinite(infiniteScroll) {
    console.log('Begin infiniteScroll operation');

    this.fromR = this.fromR + this.v_step;
    this.toR = this.toR + this.v_step;

    try {
      this.workListProvider.getWorkListPost(this.fromR + '', this.toR + '').then(data => {


        if (!data) {

          //  infiniteScroll.enable(false);
          infiniteScroll.complete();
          return;
        }
        console.log('data is ' + data)
        //this.test1= this.test1.concat(data);
        //this.test2=this.test2.concat(data);;





        console.log(data);
        infiniteScroll.complete();



      })
    }
    catch (err) {

    }
    console.log(' infiniteScroll has ended');
  }







  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.searchItem = '';

    this.fromR = 1;
    this.toR = this.v_step;

    try {
      this.workListProvider.getWorkListcountPost()

        .then(data => {
          window.localStorage.setItem('noOfNotifications', data[0].ntf);


          console.log(data);
        });
    }
    catch (error) {


    }

    this.workListProvider.getWorkListPost( this.fromR + '', this.toR + '')

      .then(data => {

        this.test1 = data;
        this.test2 = data;
        this.test3 = data;


        this.applyfilter();
        refresher.complete();

      })




  }
  backPage() {
    this.navCtrl.push(StartPage
      , {});
  }
  setBackButtonAction() {
    this.Navbar.backButtonClick = () => {

      this.navCtrl.push(StartPage);



    }
  }

  CustomtfFilter() {
    this.showSearch = false;
    //document.getElementById("search-div").style.display="block";
    //this.addclass('search-div');
    // let x =document.getElementsByClassName("tt");
    // x[0].style.height="100%";

  }

  hideFilter() {
    //this.removeClass('search-div');
    //document.getElementById("search-div").style.display="none";
    this.showSearch = true;
  }


  addclass(elementId: string) {

    var el;
    el = document.getElementById(elementId);
    $(el).addClass('block-display');

  }

  removeClass(elementId: string) {

    var el;
    el = document.getElementById(elementId);
    $(el).removeClass('block-display');

  }


  intializeFilter() {
    if (this.others) {
      this.othersClass = 'ico-fa-btn1 dark-bg gg';
      this.otherIcon = '#fff';
    }

    if (this.po) {
      this.POClass = 'ico-fa-btn1 dark-bg gg';
      this.POIcon = '#fff';
    }



    if (this.requisitions) {
      this.requisitionsClass = 'ico-fa-btn1 dark-bg gg';
      this.requisitionsIcon = '#fff';
    }

    if (this.expenses) {
      this.expensesClass = 'ico-fa-btn1 dark-bg gg';
      this.expensesIcon = '#fff';
    }

    if (this.overtime) {
      this.overtimeClass = 'ico-fa-btn1 dark-bg gg';
      this.overtimeIcon = '#fff';
    }

    if (this.hr) {
      this.HRClass = 'ico-fa-btn1 dark-bg gg ';
      this.HRIcon = '#fff';
    }



  }



  pressFilterButton(filterName: string, elementId: string) {
    this.searchItem = '';


    if (filterName == 'Others') {

      if (!this.others) {
        this.others = 'Other';
        this.othersClass = 'ico-fa-btn1 dark-bg gg';
        this.otherIcon = '#fff';


      }
      else {
        this.others = '';
        this.othersClass = 'ico-fa-btn1';
        this.otherIcon = '#353D4e';

      }

    }

    if (filterName == 'PO') {

      if (!this.po) {
        this.po = 'PO';
        this.POClass = 'ico-fa-btn1 dark-bg gg';
        this.POIcon = '#fff';

      }
      else {
        this.po = '';
        this.POClass = 'ico-fa-btn1 ';
        this.POIcon = '#353D4e';


      }


    }

    if (filterName == 'Requisitions') {

      if (!this.requisitions) {
        this.requisitions = 'Requisition';
        this.requisitionsClass = 'ico-fa-btn1 dark-bg gg';
        this.requisitionsIcon = '#fff';


      }
      else {
        this.requisitions = '';
        this.requisitionsClass = 'ico-fa-btn1';
        this.requisitionsIcon = '#353D4e';

      }

    }

    if (filterName == 'Expenses') {

      if (!this.expenses) {
        this.expenses = 'Expenses';
        this.expensesClass = 'ico-fa-btn1 dark-bg gg';
        this.expensesIcon = '#fff';


      }
      else {
        this.expenses = '';
        this.expensesClass = 'ico-fa-btn1';
        this.expensesIcon = '#353D4e';

      }

    }

    if (filterName == 'Overtime') {

      if (!this.overtime) {
        this.overtime = 'Overtime';
        this.overtimeClass = 'ico-fa-btn1 dark-bg gg';
        this.overtimeIcon = '#fff';


      }
      else {
        this.overtime = '';
        this.overtimeClass = 'ico-fa-btn1';
        this.overtimeIcon = '#353D4e';

      }

    }

    if (filterName == 'HR') {

      if (!this.hr) {
        this.hr = 'HR';
        this.HRClass = 'ico-fa-btn1 dark-bg gg ';
        this.HRIcon = '#fff';


      }
      else {
        this.hr = '';
        this.HRClass = 'ico-fa-btn1';
        this.HRIcon = '#353D4e';

      }

    }

    //filter_type

    this.applyfilter();


  }

  applyfilter() {

    let filterValue = '-';
    if (this.others)
      filterValue = filterValue + this.others + '-';
    if (this.po)
      filterValue = filterValue + this.po + '-';
    if (this.requisitions)
      filterValue = filterValue + this.requisitions + '-';
    if (this.expenses)
      filterValue = filterValue + this.expenses + '-';
    if (this.overtime)
      filterValue = filterValue + this.overtime + '-';
    if (this.hr)
      filterValue = filterValue + this.hr + '-';

    //filterValue=this.others+this.po+this.requisitions+this.expenses+this.overtime+this.hr;



    if (filterValue && filterValue.length > 1) {
      this.filterIcon = 'dark';
      this.test1 = this.test2.filter((item) => {
        return (filterValue.toLowerCase().indexOf(item.filter_type.toLowerCase()) > -1);
      })


    }

    else {
      this.filterIcon = 'vlight';
      this.test1 = this.test2;
    }
    this.test3 = this.test1;
  }


  // presentPopover() {
  //   let popover = this.popoverCtrl.create(PopoverPage);
  //   let ev = {
  //     target : {
  //       getBoundingClientRect : () => {
  //         return {
  //           top: '100%'
  //         };
  //       }
  //     }
  //   };

  //   popover.present({ev});

  // }



  takeReaasignAction(title: string, notificationId) {
    this.navCtrl.push(EmployeesPage, {
      title: title,
      notificationId: notificationId,
      hr: this.hr,
      overtime: this.overtime,
      expenses: this.expenses,
      requisitions: this.requisitions,
      po: this.po,
      others: this.others

    });

  }


  openDelagtion()
  {
   
    this.navCtrl.push(DelegationHomePage, {} );

  }


}




