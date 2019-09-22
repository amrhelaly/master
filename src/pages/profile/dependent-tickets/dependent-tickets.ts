import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the DependentTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dependent-tickets',
  templateUrl: 'dependent-tickets.html',
})
export class DependentTicketsPage {

  TicketData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
 this.getDependentTickets();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DependentTicketsPage');
  }
  getDependentTickets()
  {
    


    try{
      this.ProfileProvider.getDependentTickets()
      
      .then(data => {
       

      this.TicketData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }
}
