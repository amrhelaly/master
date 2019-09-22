import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the RelationinMbcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-relationin-mbc',
  templateUrl: 'relationin-mbc.html',
})
export class RelationinMbcPage {
  
  relationData;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController  ) {
  this.getEmpoyeeRelationsInMBC();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelationinMbcPage');
  }
  getEmpoyeeRelationsInMBC()
  {
    


    try{
      this.ProfileProvider.getEmpoyeeRelationsInMBC()
      
      .then(data => {
       

      this.relationData= data;
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }
}
