import  {NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import { ViewChild, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the PublicSpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-teamdetails',
  templateUrl: 'teamdetails.html',
})











export class TeamDetailsPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,  private sanitized: DomSanitizer
  ) {
   
     this.character =this.params.get('info');
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {

 
    console.log('ionViewDidLoad MyTeamPage');
  }
}
