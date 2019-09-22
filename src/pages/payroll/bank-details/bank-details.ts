import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BankDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

   
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {
selectedBank;
title :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedBank=this.navParams.get('item');
    this.title=this.selectedBank.bank_name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankDetailsPage');
  }

}
