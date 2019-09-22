import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BasicDataPage } from '../basic-data/basic-data';
import {EmploymentSummaryPage} from '../employment-summary/employment-summary';
import {EmployeePhonePage} from '../employee-phone/employee-phone';
import {EmployeeAdressessPage} from '../employee-adressess/employee-adressess';
import {EmployeePassportPage} from '../employee-passport/employee-passport';
import {EmployeeVisaPage} from '../employee-visa/employee-visa';

import {DependentTicketsPage} from '../dependent-tickets/dependent-tickets';
import {LaborCardPage} from '../labor-card/labor-card';
import {RelationinMbcPage} from '../relationin-mbc/relationin-mbc';
import {NationalCardPage} from '../national-card/national-card';
import { AppModule } from '../../../app/app.module';
/**
 * Generated class for the ProfileHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-profile-home',
  templateUrl: 'profile-home.html',
})
export class ProfileHomePage {
 gulfIcons :boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (AppModule.businessGroup=='81' || AppModule.businessGroup=='998' )
    this.gulfIcons=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileHomePage');
  }

  openBasicData()
  {
    this.navCtrl.push(BasicDataPage);
  }

  openEmploymentSummary()
  {
    this.navCtrl.push(EmploymentSummaryPage);
  }

  openEmploymentSPhones()
  {
    this.navCtrl.push(EmployeePhonePage);
  }

  openEmploymentSAddress()
  {
    this.navCtrl.push(EmployeeAdressessPage);
  }

  openEmployeePassport()
  {
    this.navCtrl.push(EmployeePassportPage);
  }

  openEmployeeVisa()
  {
    this.navCtrl.push(EmployeeVisaPage);
  }

  openDependentTicket()
  {
    this.navCtrl.push(DependentTicketsPage);
  }

  openLaborCard()
  {
    this.navCtrl.push(LaborCardPage);
  }

  openRelationinMbc()
  {
    this.navCtrl.push(RelationinMbcPage);
  }

  openNationalCard()
  {
    this.navCtrl.push(NationalCardPage);
  }

}
