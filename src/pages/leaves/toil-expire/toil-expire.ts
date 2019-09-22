import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {SshrLeavesProvider} from '../../../providers/sshr-leaves/sshr-leaves';
import { AppModule } from '../../../app/app.module';
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';



 
@Component({
  selector: 'page-toil-expire',
  templateUrl: 'toil-expire.html',
})
export class ToilExpirePage {

  toilData;
  constructor(public navCtrl: NavController, public navParams: NavParams , private LeavesProvider :SshrLeavesProvider   ,public loadingController: LoadingController , public AlertController :AlertController
  ) {
    this.getToil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToilExpirePage');
  }

  getToil()
  {
    


    try{
      this.LeavesProvider.getToilExpire()
      
      .then(data => {
       
       
      this.toilData= data;

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

}
