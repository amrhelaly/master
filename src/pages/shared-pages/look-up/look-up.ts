import { Component } from '@angular/core';
import  {NavController, NavParams , ViewController } from 'ionic-angular';
import { WorkListNtfProvider } from '../../../providers/work-list-ntf/work-list-ntf';

/**
 * Generated class for the LookUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-look-up',
  templateUrl: 'look-up.html',
})
export class LookUpPage {

  lookUpData;
  lookUpType;
  title;
  constructor(public navCtrl: NavController, public navParams: NavParams , public WorkListProvider :WorkListNtfProvider ,  public viewCtrl: ViewController ) {
  this.title=this.navParams.get('title');
  this.lookUpType=this.navParams.get('lookUpType');
  this.getlookUp();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LookUpPage');
  }


  getlookUp()
  {
    try{
      this.WorkListProvider.getLookUp(this.lookUpType)
      
      .then(data => {
        
      this.lookUpData= data;

   
        
      });
    }
    catch (error)
    {

    }
  }


  dismiss()
  {
    
    this.viewCtrl.dismiss();

  }

  LookUpTapped(event , item)
  {

  let data = { selectedLookUp :item };
  this.viewCtrl.dismiss(data);
  }

}
