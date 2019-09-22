import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';
/**
 * Generated class for the BuHeadcountDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import * as $ from 'jquery';


declare var google;
@Component({
  selector: 'page-bu-headcount-db',
  templateUrl: 'bu-headcount-db.html',
})
export class BuHeadcountDbPage {
  
   colors=['rgb(51, 102, 204)' , 'rgb(220, 57, 18)','rgb(255, 153, 0)','rgb(16, 150, 24)' ,'rgb(153, 0, 153)','rgb(0, 153, 198)'];
   BuHeadCount;
   allDictorateData:{id:number,data:any};
   seg='P';
   BuGenderHeadCount
  constructor(public navCtrl: NavController, public navParams: NavParams , public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
this.getEmployeeCountBUDirectorate();
//this.drawhHadcountGender();
//this.getEmployeeHeadcountGender();

this.allDictorateData=null;

  }

  ionViewDidLoad() {
   
    //google.charts.setOnLoadCallback(this.drawChart());
    //google.charts.setOnLoadCallback(this.drawBasic());

   //this.drawhHadcountGender();

  }

 
   getEmployeeHeadcountGender()
  {
    


    try{
      this.DashbaordProvider.getEmployeeHeadcountGender()
      
      .then(data => {
       
       
     this.BuGenderHeadCount=data;
      this.drawhHadcountGender(data)
     

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }



  async getEmployeeCountBUDirectorate()
  {
    


    try{
      this.DashbaordProvider.getEmployeeCountBUDirectorate()
      
      .then(data => {
       
       
      this.BuHeadCount= data;
      this.drawChart(data)
 

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  getEmployeeCountPersonTypeDirectorate(val ,label,businessGroup: string)
  {
    


    try{
      this.DashbaordProvider.getEmployeeCountPersonTypeDirectorate(businessGroup)
      
      .then(data => {
       
       //this.allDictorateData.
     this.drawBasic(val,label,data)
    

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  drawBGpersonType(val ,label,businessGroup)
  {
    this.getEmployeeCountPersonTypeDirectorate(val ,label,businessGroup);
  }






  drawChart( buData) {

    if (!buData)
    return;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'BU');
    data.addColumn('number', 'headCount');
    data.addColumn('number', 'id');
    data.addColumn('number', 'BuId');
    /*data.addRows([
      ['DXB', 1264 ,1],
      ['EG', 401 ,2],
      ['KSA', 600,3],
      ['Jor', 324,4],
      ['LEB',136,5]
    ]);*/
    for (var i=0 ; i<buData.length ; i++)
    {
      data.addRows([[ buData[i].business_groups,buData[i].employee_count,i , buData[i].business_group_id  ]]);

    }
   
    var options = {
      //'title':'Head Count',
                
                pieHole: 0.4,
               // is3D:true,
               legend: {
                 position:'top',
                 maxLines:2
               },
               colors:this.colors,
         // pieSliceText: 'value-and-percentage',
          slices: {  1: {offset: 0},
                    2: {offset: 0.02},
                    3: {offset: 0.01},
                    4: {offset: 0.02},
          },
                };

  var t=this;
    var chart = new google.visualization.PieChart(document.getElementById('pie_div_hc'));

    function selectHandler() {
    
      var selectedItem = chart.getSelection()[0];
    
   
       if (selectedItem) {
        
       //var value = data.getValue(selectedItem.row, selectedItem.column);
      
       var value = data.getValue(selectedItem.row, 2);
       var label = data.getValue(selectedItem.row, 0);
       var buId = data.getValue(selectedItem.row, 3);
       // alert('The user selected ' + value);
        
       // t.drawBasic(value , label );
       t.drawBGpersonType(value , label ,buId+'');
     
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
 
    chart.draw(data, options);
  }


   drawBasic(val , label , BUpersonTypeData) {

    // var data = google.visualization.arrayToDataTable([
    //   ['Diectorate', 'Head count'],
    //   ['Arabya', 300],
    //   ['HR', 240],
    //   ['Production', 270],
    //   ['Operations', 201]
     
    // ]);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'person');
    data.addColumn('number', 'headCount');
    // data.addRows([
    //   ['Arabya', 300 ],
    //   ['HR', 240 ],
    //   ['Production', 270],
    //   ['Operations', 201]
   
    // ]);
var barHeight=0;
    for (var i=0 ; i<BUpersonTypeData.length ; i++)
    {
      data.addRows([[ BUpersonTypeData[i].person_type,BUpersonTypeData[i].employee_count]]);
      barHeight=barHeight+50;
    }
   

  var color=[];
try{
  color[0]=this.colors[val];
}catch (err)
{
  color[0]='red' ;
}
    var options = {
      title: label+' Person Type'
      ,height:250
      ,legend:'none',
      chartArea: {width: '65%'},
      bar: {groupWidth: "55%"},
      colors:color,
      hAxis: {
      //  title: 'Total Population',
        minValue: 0
      },
      vAxis: {
       // title: 'City'
       textStyle:{ fontSize: 10}
      },
      animation: {
        duration: 500,
        startup: true
    }
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_div_hc'));

    chart.draw(data, options);

  }

 drawhHadcountGender(genderData) {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'BG');
  data.addColumn('number', 'Male');
  data.addColumn('number', 'Female');


  for (let i=0 ;i<genderData.length;i++)
  data.addRows([  [genderData[i].business_groups, genderData[i].male, genderData[i].female ] ]); 

  
   

    var options = {
    //  'width':400,
      'height':300,
     colors:['#6633CC','#DD4477'],
      animation: {
        duration: 1000,
        startup: true
    },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '85%' },
      isStacked: true
    };
   
 
    var chart = new google.visualization.BarChart(document.getElementById('bar_head_count_gender'));
  chart.draw(data, options);
  }

  segmentChanged()
  {

        if (this.seg=='P')
        {
          this.getEmployeeCountBUDirectorate();
        }
        else
        {
            
          this.getEmployeeHeadcountGender();
            
        }
  }

}
