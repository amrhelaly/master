import { Component } from '@angular/core';
import  {NavController, NavParams  } from 'ionic-angular';
import { LettersPreviewPage } from '../letters-preview/letters-preview';
import { HousingPreviewPage } from '../housing-preview/housing-preview';
import { BusinesscardPreviewPage } from '../businesscard-preview/businesscard-preview';
import { StartPage } from '../../shared-pages/start/start';
import { AppModule } from '../../../app/app.module';

import { Navbar } from 'ionic-angular';

import { ViewChild } from '@angular/core';




/**
 * Generated class for the HrRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-hr-requests',
  templateUrl: 'hr-requests.html',
})
export class HrRequestsPage {
  businessGroup;
  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
    this.businessGroup=AppModule.businessGroup;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrRequestsPage');
    this.setBackButtonAction();

  }

  goPageH()
  {
    this.navCtrl.push(HousingPreviewPage);
  }
  goPageL()
  {
  this.navCtrl.push(LettersPreviewPage);
  }

  backPage()
  {
  this.navCtrl.push(StartPage);
  }

  goPageBC()
  {
    this.navCtrl.push(BusinesscardPreviewPage);
  }

  setBackButtonAction(){
    this.Navbar.backButtonClick = () => {
     
      this.navCtrl.push(StartPage);
   

    
     }
    }
}
