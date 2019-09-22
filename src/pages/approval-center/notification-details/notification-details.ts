import { Component } from '@angular/core';
import  {NavController, NavParams, ViewController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController, Platform, ActionSheetController } from 'ionic-angular';
import { WorkListNtfProvider } from '../../../providers/work-list-ntf/work-list-ntf';
import { WorkListPage } from '../work-list/work-list';
import { AppModule } from '../../../app/app.module';
import { EmployeesPage } from '../../shared-pages/employees/employees';
import { LookUpPage } from '../../shared-pages/look-up/look-up';

import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the NotificationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-notification-details',
  templateUrl: 'notification-details.html',
})
export class NotificationDetailsPage {
  notificationBody;
  moreActions;
  baseActions;
  baseActions2;
  wf;
  NotificationHistory;

  ntfAttributes;
  ntfAttributesNumber;
  ntfAttributesText;
  ntfAttributesRoles;
  ntfAttributeslookUp;

  ntfAttributesNumberValues: any[];
  ntfAttributesTextValues: any[];
  ntfAttributesRolesValues: any[];
  ntfAttributeslookUpValues: any[];

  hr: string = '';
  overtime: string = '';
  expenses: string = '';
  requisitions: string = '';
  po: string = '';
  others: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitized: DomSanitizer, public loadingController: LoadingController
    , public workListProvider: WorkListNtfProvider, public platform: Platform, public actionsheetCtrl: ActionSheetController,
    public modalCtrl: ModalController, public viewCtrl: ViewController, public AlertController: AlertController
  ) {


    this.hr = this.navParams.get('hr');
    this.overtime = this.navParams.get('overtime');
    this.expenses = this.navParams.get('expenses');
    this.requisitions = this.navParams.get('requisitions');
    this.po = this.navParams.get('po');
    this.others = this.navParams.get('others');

    this.ntfAttributesTextValues = [];
    this.ntfAttributesNumberValues = [];
    this.ntfAttributesRolesValues = [];
    this.ntfAttributeslookUpValues = [];
    this.notificationBody = this.navParams.get('notificationBody');
    //this.moreActions = this.navParams.get('moreActions');
    this.baseActions = null;
    this.baseActions2 = this.navParams.get('baseActions');
    this.wf = this.navParams.get('wf');
    //this.baseActions2.reverse();
    

    var xx = ``;

    this.notificationBody = this.sanitized.bypassSecurityTrustHtml(this.notificationBody);

    this.getNotificationAttributes();


    // get approvers history 
    try {

      this.workListProvider.getNotificationHistory(this.wf.notification_id, this.wf.item_type, this.wf.item_key, this.wf.process_activity, this.wf.filter_type)
        .then(data => {


          this.NotificationHistory = data;
          if (this.NotificationHistory && this.NotificationHistory.length == 0)
            this.NotificationHistory = null;
        });




    }
    catch (error) {


    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationDetailsPage');
  }


  morex(bu) {
    let wf = this.wf;
    if (bu.button_name == 'MORE') {
      this.openMenu(wf);

    }
    else if (bu.button_name == 'MORE') {
      null;
    }

    else if (bu.button_name == 'MORE_INFORMATION_REQUEST') {
      this.takeReaasignAction('More Information', wf.notification_id);
    }

    else if (bu.button_name == 'REASSIGN') {
      this.takeReaasignAction('Reassign', wf.notification_id);
    }
    else {
      this.takeNotificationAction(wf.notification_id, wf.item_type, wf.item_key, wf.process_activity, bu.button_name);
    }
  }




  openMenu(wf) {

    let bu = wf.more_actions;

    this.moreActions = [];
    for (let i = 0; i < bu.length; i++) {
      this.moreActions.push({
        text: bu[i].button_label
        , icon: !this.platform.is('ios') ? bu[i].button_icon : null
        , handler: () => { this.actionSheetHandler(bu[i].button_name, wf) }
      });
    }

    // adding cancel 
    this.moreActions.push({
      text: 'Cancel',
      role: 'cancel', // will always sort to be on the bottom
      icon: !this.platform.is('ios') ? 'close' : null,
      handler: () => { this.actionSheetHandler('cancel', wf) }
    });


    let actionSheet = this.actionsheetCtrl.create({
      // title: 'Actions',
      //cssClass: 'action-sheets-basic-page',
      buttons: this.moreActions
    });
    actionSheet.present();
  }


  actionSheetHandler(act, wf) {


    if (act == 'cancel')
      null;
    else if (act == 'MORE_INFORMATION_REQUEST') {
      this.takeReaasignAction('More Information', wf.notification_id);
    }

    else if (act == 'REASSIGN') {
      this.takeReaasignAction('Reassign', wf.notification_id);
    }
    else {
      this.takeNotificationAction(wf.notification_id, wf.item_type, wf.item_key, wf.process_activity, act);
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

      for (let i = 0; i < this.ntfAttributesText.length; i++) {

        if (this.ntfAttributesText[i] && this.ntfAttributesText[i].name == 'WF_NOTE') {

          if (!this.ntfAttributesTextValues[i]) {
            AppModule.showMessage(this.AlertController, 'Please add notes');
            return 0;

          }

        }

      }
    }

    // check Forward 

    if (buttonName && buttonName.indexOf('FORWARD') > 1) {

      for (let i = 0; i < this.ntfAttributesRoles.length; i++) {

        if (this.ntfAttributesRoles[i]) {

          if (!this.ntfAttributesRolesValues[i]) {
            AppModule.showMessage(this.AlertController, 'Please choose person before forward');
            return 0;

          }

        }

      }
    }

    return 1;

  }


  takeNotificationAction(notificationId, itemType, itemKey, activityId, buttonName) {


    let validated = this.validateBeforeAction(buttonName);
    if (validated == 0)
      return;


    try {



      let attrs = this.setNotificationAttributes();
      if (!attrs)
        attrs = 'none';
      this.workListProvider.takeAction(notificationId, itemType, itemKey, activityId, buttonName, attrs)
        .then(data => {



         
          if (data[0].message == '0') {


            AppModule.showMessage(this.AlertController, data[0].value)

            return;
          }
          else {


            // update count here 
            window.localStorage.setItem('noOfNotifications', data[0].message);
            this.navCtrl.push(WorkListPage, {
              hr: this.hr,
              overtime: this.overtime,
              expenses: this.expenses,
              requisitions: this.requisitions,
              po: this.po,
              others: this.others
            });
            // this.viewCtrl.dismiss();
          }

        }
        );
      // .catch ()
      // {

      //   loader.dismiss();
      // }


    }
    catch (error) {


      AppModule.showMessage(this.AlertController, 'Error:' + error.message);

    }

  }

  testxx() {


  }

  takeReaasignAction(title: string, notificationId) {
    this.navCtrl.push(EmployeesPage, {
      title: title, notificationId: notificationId, hr: this.hr,
      overtime: this.overtime,
      expenses: this.expenses,
      requisitions: this.requisitions,
      po: this.po,
      others: this.others
    });

  }

  getNotificationAttributes() {
    try {
      this.workListProvider.getNotificationAttributes(this.wf.notification_id)

        .then(data => {
          if (data)
            this.ntfAttributes = data;

          if (this.ntfAttributes.length <= 0)
            this.ntfAttributes = null;
          else {


            this.ntfAttributesNumber = this.ntfAttributes.filter((item) => {
              return (item.type.toLowerCase().indexOf('number') > -1);
            })


            this.ntfAttributesText = this.ntfAttributes.filter((item) => {
              return (item.type.toLowerCase().indexOf('varchar2') > -1);
            })

            this.ntfAttributesRoles = this.ntfAttributes.filter((item) => {
              return (item.type.toLowerCase().indexOf('role') > -1);
            })

            this.ntfAttributeslookUp = this.ntfAttributes.filter((item) => {
              return (item.type.toLowerCase().indexOf('lookup') > -1);
            })
          }
          
        });
    }
    catch (error) {

      //this.showToast('middle','Connection Problem');

      AppModule.showMessage(this.AlertController, 'Error:' + error.message)
    }
  }

  roleTapped(event, item, i) {

    let modalAction = this.modalCtrl.create(EmployeesPage, {
      title: item.display_name,
      notificationId: this.wf.notification_id, callingType: 1
    });
    modalAction.onDidDismiss(data => {
      if (data) {
        this.ntfAttributesRolesValues[i] = data.user;
      }
    });
    modalAction.present();
  }



  lookUpTapped(event, item, i) {
    let modalAction = this.modalCtrl.create(LookUpPage, {
      title: item.display_name,
      lookUpType: item.format
    });
    modalAction.onDidDismiss(data => {
      if (data) {
        this.ntfAttributeslookUpValues[i] = data.selectedLookUp;
      }
    });
    modalAction.present();

  }



  setNotificationAttributes() {
    let attributesString = ';';
    if (this.ntfAttributes) {

      // text values 

      for (let i = 0; i < this.ntfAttributesText.length; i++) {

        if (this.ntfAttributesTextValues[i]) {

          attributesString = attributesString + 'type:text,' + 'name:' + this.ntfAttributesText[i].name + ',value:' + this.ntfAttributesTextValues[i] + ';';
        }

      }


      // number values 

      for (let i = 0; i < this.ntfAttributesNumber.length; i++) {

        if (this.ntfAttributesNumberValues[i]) {

          attributesString = attributesString + 'type:number,' + 'name:' + this.ntfAttributesNumber[i].name + ',value:' + this.ntfAttributesNumberValues[i] + ';';
        }

      }


      // role values 

      for (let i = 0; i < this.ntfAttributesRoles.length; i++) {

        if (this.ntfAttributesRolesValues[i]) {

          attributesString = attributesString + 'type:role,' + 'name :' + this.ntfAttributesRoles[i].name + ',value:' + this.ntfAttributesRolesValues[i].m + ';';
        }

      }


      // lookUp values 

      for (let i = 0; i < this.ntfAttributeslookUp.length; i++) {

        if (this.ntfAttributeslookUpValues[i]) {

          attributesString = attributesString + 'type:lookup,' + 'name:' + this.ntfAttributeslookUp[i].name + ',value:' + this.ntfAttributeslookUpValues[i].lookup_code + ';';
        }

      }





      if (attributesString.length > 2)
        attributesString = attributesString.substring(1, attributesString.length - 1);
      else
        attributesString = null;  // no value

    }
    else {
      attributesString = null;

    }
   
    return attributesString;
  }


}
