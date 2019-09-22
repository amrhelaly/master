import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import {LeaveDetailsPage} from '../leave-details/leave-details';
import { SshrLeavesProvider } from '../../../providers/sshr-leaves/sshr-leaves';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {NewLeavePage} from '../new-leave/new-leave';
import {LeaveHomePage} from '../leave-home/leave-home';
import { AppModule } from '../../../app/app.module';
/**
 * Generated class for the LeaveHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { AES256 } from '@ionic-native/aes-256';

@Component({
  selector: 'page-leave-history',
  templateUrl: 'leave-history.html',
})
export class LeaveHistoryPage {
  
  userId            :string  ;
  personId          :string ;
  businessGroup     :string ;
  assignmentId      :string ;
  appovedLeaves     :any;
  appovedLeavesCount:number=0;
  pendingLeaves     :any;
  pendingLeavescount:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController ,
     public leavesHistory : SshrLeavesProvider  ,public loadingController: LoadingController , public aes256: AES256) {
      
      

    try{
      this.leavesHistory.getPendingLeavesCount()
      
      .then(data => {
      
       this.pendingLeavescount= data[0].pending_count;
     
                             
                            if (this.pendingLeavescount!=0)
                            {
                              
                              try{
                                  this.leavesHistory.getPendingLeaves()
                                  
                                  .then(data => {
                                    
                                  this.pendingLeaves= data;
                                  
                                    
                                  });
                                }
                                catch (error)
                                {
                                
                                  this.showToast('middle','Connection Problem');
                                }
                              }
        
      });
    }
    catch (error)
    {
     
      this.showToast('middle','error');
    }

  
    
  

    try{
      this.leavesHistory.getApprovedLeavesCount()
      
      .then(data => {
      
       this.appovedLeavesCount= data[0].approvedcount;
                      if (this.appovedLeavesCount!=0)
                      {

                        try{
                          this.leavesHistory.getApprovedLeaves()
                          
                          .then(data => {
                          
                           this.appovedLeaves= data;
                          
                            
                          });
                        }
                        catch (error)
                        {
                         
                          this.showToast('middle','Connection Problem');
                        }


                      }
        
      });
    }
    catch (error)
    {
     
      this.showToast('middle','Connection Problem');
    }

      


     

   
      // loader.dismiss();
   
  }

  showToast(position: string , txt : string) {
   
  
    let x= this.loadingController.create({
     spinner: 'hide',
     content: ` `,

    });  

    x.present();
   let toast = this.toastCtrl.create({
     message: txt,
     position: position,
     showCloseButton: true,
     closeButtonText: 'Ok'
   });
   toast.onDidDismiss(()=>x.dismiss());
   toast.present(toast);
 }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad LeaveHistoryPage');
  }
  leaveTapped(event, item , lType ) {
    this.navCtrl.push(LeaveDetailsPage, {
            item: item ,
           leaveType:lType
    });
  }

  newLeave()
  {

this.navCtrl.push(NewLeavePage , {userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId });

  }
  backPage()
  {
    this.navCtrl.push(LeaveHomePage , {userId: this.userId ,personId: this.personId ,businessGroup:  this.businessGroup, assignmentId:  this.assignmentId });
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    
    try{
      this.leavesHistory.getPendingLeavesCount()
      
      .then(data => {
      
       this.pendingLeavescount= data[0].pending_count;
     
                             
                            if (this.pendingLeavescount!=0)
                            {
                              
                              try{
                                  this.leavesHistory.getPendingLeaves()
                                  
                                  .then(data => {
                                    
                                  this.pendingLeaves= data;
                                  
                                    
                                  });
                                }
                                catch (error)
                                {
                                
                                  this.showToast('middle','Connection Problem');
                                }
                              }
        
      });
    }
    catch (error)
    {
     
      this.showToast('middle','error');
    }

  
    
  

    try{
      this.leavesHistory.getApprovedLeavesCount()
      
      .then(data => {
      
       this.appovedLeavesCount= data[0].approvedcount;
                      if (this.appovedLeavesCount!=0)
                      {

                        try{
                          this.leavesHistory.getApprovedLeaves()
                          
                          .then(data => {
                          
                           this.appovedLeaves= data;
                          
                            
                          });
                        }
                        catch (error)
                        {
                         
                          this.showToast('middle','Connection Problem');
                        }


                      }
        
      });
    }
    catch (error)
    {
     
      this.showToast('middle','Connection Problem');
    }

    
    refresher.complete();
   

  }
}
