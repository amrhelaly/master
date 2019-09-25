
import  {NavController, NavParams } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import { ViewChild, Component } from '@angular/core';
import {SchedulerProvider} from '../../../providers/scheduler/scheduler'
import { LoadingController } from 'ionic-angular';
import {AlertController } from 'ionic-angular';

/**
 * Generated class for the PublicSpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-myspace',
  templateUrl: 'myspace.html',
})
export class MySpacePage {

  // businessGroup     :string ;
  // assignmentId      :string ;
  MySpaceList;
  MySpaceListAll;
  fromR=0;
  v_step=12;
  toR=this.v_step;
 // seg:string ="myspace";
 // @ViewChild(Navbar) Navbar: Navbar;
 searchDate :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public SchedulerData:SchedulerProvider,
    public loadingController: LoadingController ,  public AlertController :AlertController) {
  
 
    let datex :Date=new Date();
    this.searchDate=datex.toISOString();

    
    

  }

  ionViewDidLoad() {
   // this.setBackButtonAction();
   this.getMySpaceList();
    console.log('ionViewDidLoad MySpacePage');
  }

  getMySpaceList()
  {
    let datex :Date=new Date(this.searchDate);
     
    
   // this.searchDate=datex.toISOString();
    let formattedDate = datex.getFullYear()+"-" + (datex.getMonth() + 1)+"-" +datex.getDate();
    //datex.getDate() + "-" + (datex.getMonth() + 1) + "-" + datex.getFullYear();
    
   

    try{

      this.SchedulerData.getMySpaceList(formattedDate)
     // this.payrollData.getPayslipList(this.businessGroup,this.personId)
      
      .then(data => {
        
      this.MySpaceListAll= data;
      if (this.MySpaceListAll)
      {
      this.MySpaceList=this.MySpaceListAll.slice(this.fromR,this.toR);
      }
      });
    }
    catch (error)
    {
    
      
      AppModule.showMessage(this.AlertController,"error");
    }
  }



  async doRefresh(refresher) {
    this.toR=this.v_step;
    await this.getMySpaceList();
    refresher.complete();

    }



    doInfinite(infiniteScroll) {


      // this.fromR=this.fromR+this.v_step;
       this.toR=this.toR+this.v_step;
   
   
       try{
   
         
           
         if(this.MySpaceListAll)
         this.MySpaceList=(this.MySpaceListAll.slice(0 ,this.toR));
         
         infiniteScroll.complete();
     }
       catch (err)
       {
         
       }
       console.log(' infiniteScroll has ended');
     }


     onchangeDate()
     {
     
       //alert (this.searchDate.toString());
       this.getMySpaceList();
     // this.searchDate=this.searchDate+3;
     }
     
     goNextDay()
     {
     
       let datex :Date=new Date(this.searchDate);
     
       datex.setDate( datex.getDate() + 1 );
       this.searchDate=datex.toISOString();
       let formattedDate = datex.getDate() + "-" + (datex.getMonth() + 1) + "-" + datex.getFullYear();
       //alert (formattedDate);
     }
     
     goPreviousDay()
     {
     
       let datex :Date=new Date(this.searchDate);
     
       datex.setDate( datex.getDate() -1 );
       this.searchDate=datex.toISOString();
       let formattedDate = datex.getDate() + "-" + (datex.getMonth() + 1) + "-" + datex.getFullYear();
     
     }
     

















  
  
}
