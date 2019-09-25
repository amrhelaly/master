import  {NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { AppModule } from '../../../app/app.module';
import { Navbar } from 'ionic-angular';
import { ViewChild, Component } from '@angular/core';
import {TeamDetailsPage} from '../myteam/teamdetails';
import {SchedulerProvider} from '../../../providers/scheduler/scheduler'
import { LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import {AlertController } from 'ionic-angular';
/**
 * Generated class for the PublicSpacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-myteam',
  templateUrl: 'myteam.html',
})




export class MyTeamPage {

 
  @ViewChild(Navbar) Navbar: Navbar;
 public  MyTeamList=[];
 public MyTeamListFixed=[];
  MyTeamListAll;
  fromR=0;
  v_step=12;
  toR=this.v_step;
  characters;
  searchItem :String;
  //public newSubcategories: any[] = [];
  public items= [] ;
   //EvaluationSpendScore=[];
  //items: Array<string> = ['ApprovalCenter', 'Profile',  'Leaves','Payroll', 'HRrequests','Expense' ,'thanksCard'];
  searchDate :string;
  searchemp :string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public SchedulerData:SchedulerProvider,
    public loadingController: LoadingController ,  public AlertController :AlertController,  private sanitized: DomSanitizer) 
  
  
  {
  
    //this.userId            =AppModule.userId; 
    //this.personId          =AppModule.personId; 
    //this.businessGroup     =AppModule.businessGroup; 
    //this.assignmentId      =AppModule.assignmentId; 
   
    let datex :Date=new Date();
this.searchDate=datex.toISOString();

    
  }

  ionViewDidLoad() {
    this.getMyTeamList();
   
      console.log('ionViewDidLoad MyTeamPage');
  }
 



  getMyTeamList()
  {
    let datex :Date=new Date(this.searchDate);
     
    
   // this.searchDate=datex.toISOString();
    let formattedDate = datex.getFullYear()+"-" + (datex.getMonth() + 1)+"-" +datex.getDate();
    try{

      this.SchedulerData.getMyTeamList(formattedDate)
    
      
      .then(data => {
        
      this.MyTeamListAll= data;
     // this.MyTeamList=this.MyTeamListAll;
      if (this.MyTeamListAll)
      {
      this.MyTeamList=this.MyTeamListAll.slice(this.fromR,this.toR);
      this.MyTeamListFixed=this.MyTeamListAll;
      
      //
    
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
    await this.getMyTeamList();
    refresher.complete();

    }



    doInfinite(infiniteScroll) {


      // this.fromR=this.fromR+this.v_step;
       this.toR=this.toR+this.v_step;
   
   
       try{
   
         
           
         if(this.MyTeamListAll)
         this.MyTeamList=(this.MyTeamListAll.slice(0 ,this.toR));
         
         infiniteScroll.complete();
     }
       catch (err)
       {
         
       }
       console.log(' infiniteScroll has ended');
     }





  openModal(detail) {

    let modal = this.modalCtrl.create(TeamDetailsPage, detail);
    modal.present();
}

reloadlist()
{

  this.MyTeamList= this.MyTeamListFixed.slice(this.fromR,this.toR);;
}
getItems(ev: any) {
 
this.reloadlist();

 
 console.log("MyTeam1:"+this.MyTeamList.length);

       let val = ev.target.value;
    console.log('vv '+val);
    if (val && val.trim() !== '') {
      this.MyTeamList= this.MyTeamListFixed.filter(function(item) {
       // return (item.full_name.toLowerCase().includes(val.toLowerCase()));
       // to be able to search with shift in webservice set nvl(shift(---))
        return (item.full_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
        //||item.shift.trim().toLowerCase().indexOf(val.toLowerCase()) > -1);
     
      });
 
      console.log("MyTeam2:"+this.MyTeamList.length);
//        for(let i in this.MyTeamList)
//    {
//  console.log("employeename:"+this.MyTeamList[i].full_name);     
//    }
      console.log("WholeTeam:"+this.MyTeamListFixed.length);


    }
}






onchangeDate()
{
  this.searchemp="";
  this.getMyTeamList();
  //alert (this.searchDate.toString());
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







