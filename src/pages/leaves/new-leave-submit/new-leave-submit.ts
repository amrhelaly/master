import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { SshrLeavesProvider } from '../../../providers/sshr-leaves/sshr-leaves';
import { LoadingController } from 'ionic-angular';
import { LeaveHistoryPage } from '../leave-history/leave-history';
import { LeaveHomePage } from '../leave-home/leave-home';
import {AlertController } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { AppModule } from '../../../app/app.module';

/**
 * Generated class for the NewLeaveSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-new-leave-submit',
  templateUrl: 'new-leave-submit.html',
})
export class NewLeaveSubmitPage {
  approverList :any;
  selectedLeave:any;
  imgx;
  imgx2;
  attachIdx
  attchCount :string;
  duration;
  constructor(public navCtrl: NavController, public navParams: NavParams , public leavesProvider : SshrLeavesProvider
      ,public loadingController: LoadingController , public _DomSanitizer: DomSanitizer , public AlertController :AlertController
    ) {

    this.approverList = navParams.get('approverList');
    this.selectedLeave = navParams.get('leaveDetails');
    this.imgx="data:image/jpg;base64,"+this.approverList[0].imge;
    this.imgx2=_DomSanitizer.bypassSecurityTrustUrl(this.imgx);
    this.attachIdx = navParams.get('pAttachId');
    this.attchCount=navParams.get('attchCount');
   

    if ( this.approverList )
    {
  this.duration=this.approverList[0].duration;
  if (this.duration=='1')
  this.duration=this.duration+' Day'
    else
    this.duration=this.duration+' Days'
    }
    else 
    {
      this.duration='0';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewLeaveSubmitPage');
  }

  submitleave()
  {
    
    
      

    try{
    
      this.leavesProvider.newLeaveRequest(this.selectedLeave.dateStart,
        this.selectedLeave.dateEnd,this.selectedLeave.absenceAttendanceTypeId,this.selectedLeave.absenceTypeName,'Y',this.selectedLeave.attribute1,this.selectedLeave.attribute2,'',this.selectedLeave.attribute4,'',
      '',this.selectedLeave.attribute7,this.selectedLeave.attribute8,this.attachIdx,null ,this.selectedLeave.selectedreplacedPesonId )
      .then(data => {
      
        if ( data[0].message  =='2')
         {
        
         // this.showToast('middle' , data[0].value);
         AppModule.showMessage(this.AlertController,data[0].value);
          return;
         }
       
      
       
          //  this.showToast('middle' , 'Submitted');
            this.navCtrl.push(
            //this.navCtrl.setRoot(
              LeaveHomePage,{userId: this.selectedLeave.userId,personId: this.selectedLeave.personId ,businessGroup:  this.selectedLeave.businessGroup, assignmentId:  this.selectedLeave.assignmentId });
            //return;
           
            
    
   
      }); 
    
    }
    catch (error)
    {
     
    
     AppModule.showMessage(this.AlertController, error.message);
     // this.showToast('middle','Connection Problem');
    }


    
  }
  showToast(position: string , txt : string) {
   
  
    let x= this.loadingController.create({
     spinner: 'hide',
     content: ` `,

    });  
}

}
