import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import {NewDelegationPage} from '../new-delegation/new-delegation';
import { WorkListNtfProvider}  from '../../../providers/work-list-ntf/work-list-ntf'; 
import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import {WorkListPage} from '../work-list/work-list';
/**
 * Generated class for the DelegationHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-delegation-home',
  templateUrl: 'delegation-home.html',
})
export class DelegationHomePage {

  delegationHistory;
  isHidden;
  @ViewChild(Navbar) Navbar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams , private WorkListNtfProvider:WorkListNtfProvider , private AlertController:AlertController) {
 
    this.isHidden=[];
    this.getDelegationHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DelegationHomePage');
    this.setBackButtonAction();
  }
  newDelagtion()
  {
    this.navCtrl.push(NewDelegationPage, {} );

  }
  getDelegationHistory()
  {
    try{
      this.WorkListNtfProvider.getDelegationHistory().then(data => {
        
      this.delegationHistory= data;
   
        
      });
    }
    catch (error)
    {
    
      //this.showToast('middle','Connection Problem');
      alert (error);
    }
  }
  setBackButtonAction(){
    this.Navbar.backButtonClick = () => {
     
      this.navCtrl.push(WorkListPage);

     }
    }

  delegatioTapped(event , item)
  {
    this.navCtrl.push(NewDelegationPage, {mode:'edit',
    itemType:item.display_name,
    dateFrom:item.begin_date_p,
    dateTo:item.end_date_p ,
    personDisplayName:item.globa_name,
    personName:item.action_argument,
    comments:item.rule_comment,
    ruleId:item.rule_id
    } 
    );
  }
  deleteRequest(item,i)
  {
    try {

      this.WorkListNtfProvider.deleteVacationRule(  item.rule_id ).then(data => { 


                      if (data[0].message=='2')
                      {

                      AppModule.showMessage(this.AlertController, data[0].value);
                      return;
                      }
                      else
                      {

                     // this.navCtrl.push(DelegationHomePage);
                     this.isHidden[i]=true;

                      }
                      });

                      }catch(err)
                      {
                      AppModule.showMessage(this.AlertController, err.message);

                      }
  }
}
