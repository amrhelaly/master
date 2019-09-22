
import { Component } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';
import { SshrLeavesProvider } from '../../../providers/sshr-leaves/sshr-leaves';
import { LoadingController } from 'ionic-angular';
import { ToastController ,ActionSheetController} from 'ionic-angular';
import { NewLeaveSubmitPage } from '../new-leave-submit/new-leave-submit'; 
import {AlertController } from 'ionic-angular';
import * as $ from 'jquery';

// for upload
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';
declare var cordova: any;
import { AppModule } from '../../../app/app.module';


import { normalizeURL } from 'ionic-angular';
import { EmployeesPage } from '../../shared-pages/employees/employees';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the NewLeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-new-leave',
  templateUrl: 'new-leave.html',
})
export class NewLeavePage {
  LeavesTypes :any;
  leaveType   :any;
  dateFrom  :Date;
  dateTo :Date;
  returnDate :string;
  halfDay :Boolean =false;
  comments : string;

  lOStypes :any;
  lOStype   :any;
  CLRtypes :any;
  CLRtype   :any;
  newLeaveOutput :any;
  approverList  :any;

  replacedPerson;
  selectedreplacedPesonName;
  selectedreplacedPesonId;
  currentleave: Array<{
    dateStart :Date  ,dateEnd :Date , absenceAttendanceTypeId: string , absenceTypeName :string,
    status :string  ,attribute1 :string , attribute2: string , attribute3 :string,
    attribute4 :string , attribute5: string , attribute6 :string,attribute7: string , attribute8 :string 
    , selectedreplacedPesonId :string , selectedreplacedPesonName:string}>;

    

    ///
    dummyJson = {
      days: [
        // {description: 'Mon'},
        // {description: 'Tue'},
        // {description: 'Wed'},
        // {description: 'Thu'},
        {description: 'Fri'}
      ],
      people: [
        {description: 'Mike'},
        {description: 'Max'},
        {description: 'Adam'},
        {description: 'Brandy'},
        {description: 'Ben'}
      ]
    }
    mmx: [
      {description: 'Mon'},
      {description: 'Tue'},
      {description: 'Wed'},
      {description: 'Thu'},
      {description: 'Fri'}
    ]
// for ulpoad
lastImage: string = null;
attchedImages : Array<{image :string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams , public toastCtrl: ToastController ,
    public leavesProvider : SshrLeavesProvider  ,public loadingController: LoadingController 
    , public AlertController :AlertController,   public modalCtrl: ModalController, 

   // for upload
    private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, 
    public actionSheetCtrl: ActionSheetController ,private platform: Platform , private selector: WheelSelector) {



      this.attchedImages=[];
          // this.attchedImages.push({image:'assets/imgs/aa_logos.png'});
          // this.attchedImages.push({image:'assets/imgs/mbc-logo.png'});
      try{
        this.leavesProvider.getLeaveTypes()
        
        .then(data => {
        
         this.LeavesTypes= data;
        
          
        });
      }
      catch (error)
      {
       
        AppModule.showMessage(this.AlertController, error.message);
      }

      // get LOS 
      try{
        this.leavesProvider.getLOStypes()
        
        .then(data => {
        
         this.lOStypes= data;
        
          
        });
      }
      catch (error)
      {
       
        AppModule.showMessage(this.AlertController, error.message);
      }

      // get CLR 

      try{
        this.leavesProvider.getCLRtypes()
        
        .then(data => {
        
         this.CLRtypes= data;
        
          
        });
      }
      catch (error)
      {
       
        
        AppModule.showMessage(this.AlertController, error.message);
      }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewLeavePage');
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


 

 


  showErrorMessage ( elementId :string, message :string)
  {
     

  //	document.getElementById("d").style.display="none";
  var x;
    x=document.getElementById(elementId);
    $(x).addClass('error-color');
     // x.style.display="none";
    // $(x).notify(message,  { className:"error",  position:"bottom center",autoHideDelay: 2500,showDuration: 200 });
     
  }
  // for upload 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Attachment Source',
      buttons: [
        {
          text: 'Load from Mobile',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  
  
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 20,
      targetWidth: 600,
      targetHeight: 600,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
   
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
    
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  
      
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  
  
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    return newFileName;
  }
   
  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      this.attchedImages.push({image :newFileName});
  
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
   showImages()
   {
     try {
    


var i=0;
for(i=0;i<this.attchedImages.length;i++) {
 
}
     }
     catch(err)
     {
      AppModule.showMessage(this.AlertController, err.message);

     }
   }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
   
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {

      return '';
    } else {
  
   if (this.platform.is('android'))
      return   cordova.file.dataDirectory + img ;
      else //ios
      return   normalizeURL( cordova.file.dataDirectory + img );

    }
  }
  
  public uploadImage() {
    // Destination URL
    var url = "http://10.10.131.34:7004/mbcWebservice/resources/sshr/newLeave/addAttach";
   
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
  
    // File name only
    var filename = this.lastImage;
   
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };
   
   // const fileTransfer: TransferObject = this.transfer.create();
    // this.loading = this.loadingCtrl.create({
    //   content: 'Uploading...',
    // });
    // this.loading.present();
    
    // Use the FileTransfer to upload the image
    //fileTransfer.upload(targetPath, url, options).then(data => {
     // this.loading.dismissAll()
   
      //this.presentToast('Image succesful uploaded.');
    //}, err => {
     
      //this.loading.dismissAll()
      //this.presentToast('Error while uploading file.');
      
    //});
    
  let xx;
    this.convertToBase64(targetPath, 'image/png').then(
      data => {
        xx = data.toString().substring(22);
   
      // this.postimage(,attch,xx);
      }
    );
  }
  
  convertToBase64(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }
  
  ///
  
   postimage(attachId,img)
  {
  
  
  
    try{
      this.leavesProvider.addAttach(attachId,img)
      
      .then(data => {
      
      
      
        
      });
    }
    catch (error)
    {
     

     AppModule.showMessage(this.AlertController,error.message);
    }
  
  }

  RemoveAttach()
  {

this.lastImage=null;

  }
  //
  openPicker() {
    this.selector.show({
      title: 'Select Your Contact',
      items: [
        this.dummyJson.days,
        this.dummyJson.people
      ],
      positiveButtonText: 'Choose',
      negativeButtonText: 'Nah',
      defaultItems: [ 
        { index: 0, value: this.dummyJson.days[4].description },
        { index: 1, value: this.dummyJson.people[1].description}
      ]
    }).then(
      result => {
        let msg = `Selected ${result[0].description} with ${result[1].description}`;
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 4000
        });
        toast.present();
      },
      err => console.log('Error: ', err)
      );
  }


  openPicker2() {
    this.dummyJson.days.pop();

    //for (i=0;i<=)
   // var u=this.LeavesTypes[0].leavename;
    //this.dummyJson.days.push({description:[this.LeavesTypes].[leavename]})

var i=0;
for(i=0;i<this.LeavesTypes.length;i++) {
  this.dummyJson.days.push({description:this.LeavesTypes[i].leavename})
}

// i=0;
for(i=0;i<this.dummyJson.days.length;i++) {
   console.log(this.dummyJson.days[i].description)
 }

  
    this.selector.show({
      title: 'Select Your Contact',
      items: [
        this.dummyJson.days,
        
      ],
    
      positiveButtonText: 'Choose',
      negativeButtonText: 'no',
     
    }).then(
      result => {
        let msg = `Selected ${result[0].description} `;
       
      },
      err => console.log('Error: ', err)
      );
  }
  


  async previewleave()
  {

    // let uu ='assets/imgs/aa_logos.png';
    // this.attchedImages.push({image:'assets/imgs/aa_logos.png'});
    // this.attchedImages.push({image:'assets/imgs/mbc-logo.png'});


let hd='No';
let los;
let clr;
let absenceAttendanceTypeId;
let error=0;
if (!this.leaveType)
 {

this.showErrorMessage('leaveTypeId','you should enter Leave Type');
error=1;
 }

 

 if (!this.dateFrom)
 {

this.showErrorMessage('dateFrom','you should enter Date From');
error=1;
 }

 if (!this.dateTo)
 {

this.showErrorMessage('dateTo','you should enter Date To');
error=1;
 }

 if (error==1)
 return;
 absenceAttendanceTypeId=this.leaveType.absence_attendance_type_id;

if (this.halfDay)
  hd='Yes';

if(this.lOStype)
los=this.lOStype.los;

  if(this.CLRtype)
clr=this.CLRtype.clr;

let attachId;
let imgClob;


 try{

// upload if exists 
if (this.attchedImages.length>=1)
{
  var currentDate = new Date()
  var days = currentDate.getDate()
  var months = currentDate.getMonth() + 1
  var years = currentDate.getFullYear()
  var hrs = currentDate.getHours(); 
  var ms = currentDate.getMinutes(); 
  var ss = currentDate.getSeconds(); 
   attachId=''+years+months+days+hrs+ms+ss;

 let cimagePath;
for (let i = 0, p = Promise.resolve(); i < this.attchedImages.length; i++) 
 {
 p.then(_ => new Promise(resolve =>
    {
       cimagePath=this.pathForImage(this.attchedImages[i].image);
     // cimagePath=this.attchedImages[i].image;
    this.convertToBase64(cimagePath , 'image/png')
         .then((d)=>
                  { // sent current to WS
                   
                  let  imgClob = d.toString().substring(22);
       
                     this.postimage(attachId,imgClob);
                    console.log(d);
                    console.log('IX'+i);

                  }
                  )
                      .then(()=>
                             {     
                               resolve();
                                if (i==this.attchedImages.length-1)
                                  {
                                    // apply 
                                    this.leavesProvider.newLeaveRequest(this.dateFrom,
                                      this.dateTo,absenceAttendanceTypeId,this.leaveType.leavename,'W',this.returnDate,this.comments,'',hd,'',
                                      '',los,clr,null,null,this.selectedreplacedPesonId)
                                      .then(data => {
                                      
                                       
                                       console.log(data)
                                           if ( data[0].message  =='2')
                                           {
                                        
                                         
                                            AppModule.showMessage(this.AlertController,data[0].value);
                                            return;
                                           }
                                       else
                                       {
                                    
                                      this.approverList=data;
                                      this.currentleave=[];
                                      this.currentleave.push({dateStart:this.dateFrom,
                                        dateEnd:this.dateTo,absenceAttendanceTypeId:absenceAttendanceTypeId,absenceTypeName:this.leaveType.leavename,status:'Y',attribute1:this.returnDate,
                                        attribute2:this.comments,attribute3:'',attribute4:hd,attribute5:'',
                                        attribute6:'',attribute7:los,attribute8:clr,selectedreplacedPesonId:this.selectedreplacedPesonId, selectedreplacedPesonName:this.selectedreplacedPesonName});
                                      //this.navCtrl.push();
                                 
                                      this.navCtrl.push(NewLeaveSubmitPage, {
                                        approverList:this.approverList,
                                        leaveDetails:this.currentleave[0],
                                        pAttachId:attachId,
                                        attchCount:this.attchedImages.length
                                      }); 
                                    
                                       }
                                        
                                      });
                                    
                                    // end apply 
                                    console.log('Finshid');
                                  }
  
                             }
                            );
    console.log('I'+i);

    }
                              ));
 }



console.log('b');


}
else
{

 

  this.leavesProvider.newLeaveRequest(
    this.dateFrom,this.dateTo,absenceAttendanceTypeId,this.leaveType.leavename,'W',this.returnDate,this.comments,'',hd,'',
    '',los,clr,attachId,null,this.selectedreplacedPesonId)
    .then(data => {
    
  
         if (  data[0].message  =='2')
         {
         
        
          AppModule.showMessage(this.AlertController,data[0].value)
          return;
         }
     else
     {
  
    this.approverList=data;
    this.currentleave=[];
    this.currentleave.push({dateStart:this.dateFrom,
      dateEnd:this.dateTo,absenceAttendanceTypeId:absenceAttendanceTypeId,absenceTypeName:this.leaveType.leavename,status:'Y',attribute1:this.returnDate,
      attribute2:this.comments,attribute3:'',attribute4:hd,attribute5:'',
      attribute6:'',attribute7:los,attribute8:clr,selectedreplacedPesonId:this.selectedreplacedPesonId, selectedreplacedPesonName:this.selectedreplacedPesonName});
    //this.navCtrl.push();
   
    this.navCtrl.push(NewLeaveSubmitPage, {
      approverList:this.approverList,
      leaveDetails:this.currentleave[0],
      pAttachId:attachId,
    attchCount:this.attchedImages.length
    }); 
  
     }
      
    });

}

 } catch (err)
 {

  AppModule.showMessage(this.AlertController, err.message);
 }
}

getListIndex(item)
{

 var index=this.attchedImages.indexOf(item);
 if (index > -1) {
   this.attchedImages.splice(index, 1);
 }
}

testxx()
{
  for (let i = 0, p = Promise.resolve(); i < this.attchedImages.length; i++) 
  {

 

  }
}

replacedTapped(event)
  {

    let modalAction = this.modalCtrl.create(EmployeesPage, {title : 'Replaced By' , 
                callingType:1  } );
  modalAction.onDidDismiss(data => {
                  if (data)
                  {
                  this.replacedPerson=data.user;
                  this.selectedreplacedPesonName=this.replacedPerson.g;
                  this.selectedreplacedPesonId=this.replacedPerson.d;
                  
                  }
                });
    modalAction.present();
  }
}