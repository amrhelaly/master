import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from '../../../providers/profile/profile';
import { AppModule } from '../../../app/app.module';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the EmployeeAdressessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-employee-adressess',
  templateUrl: 'employee-adressess.html',
})
export class EmployeeAdressessPage {

adressData; 
primaryAdrress;
nonPrimaryAdrress;
UAE :boolean=false;
KSA :boolean=false;
JORDON :boolean=false;
EGYPT_Lebanon :boolean=false;
 constructor(public navCtrl: NavController, public navParams: NavParams , public ProfileProvider :ProfileProvider , public AlertController :AlertController ) {
 if (AppModule.businessGroup=='81')
 this.UAE=true;
 if (AppModule.businessGroup=='998')
 this.KSA=true;
 if (AppModule.businessGroup=='638')
 this.JORDON=true;
 if (AppModule.businessGroup=='169' || AppModule.businessGroup=='205' )
 this.EGYPT_Lebanon=true;

  this.filterAddess();  

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeAdressessPage');
  }

  async filterAddess()
  {
        await this.getAdressData();

        if (this.adressData)
        {
        //this.primaryAdrress=this.adressData;
        this.primaryAdrress = this.adressData.filter((item) => {
          return (item.primary_address=='Yes');
        })

        this.nonPrimaryAdrress = this.adressData.filter((item) => {
          return (item.primary_address=='No');
        })
        console.log( this.nonPrimaryAdrress);
        if (this.primaryAdrress.length==0)
        this.primaryAdrress=null;

        if (this.nonPrimaryAdrress.length==0)
        this.nonPrimaryAdrress=null;


 
        }

  }
  
  async getAdressData() 
  {
    
    //return new Promise(resolve => {

    try{
      await this.ProfileProvider.getEmplomenyeeAddresses(AppModule.businessGroup)
      
      .then(data => {
       

      this.adressData= data;
 
     // resolve(data)
      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  //});
  }

}
