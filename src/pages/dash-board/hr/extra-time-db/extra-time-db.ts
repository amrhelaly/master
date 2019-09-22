import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';
/**
 * Generated class for the ExtraTimeDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import * as $ from 'jquery';


declare var google;



@Component({
  selector: 'page-extra-time-db',
  templateUrl: 'extra-time-db.html',
})
export class ExtraTimeDbPage {
  
   colors=['#990099','#3366CC','#DC3912','#FF9900','#109618','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC'];
   //['rgb(51, 102, 204)' , 'rgb(220, 57, 18)','rgb(255, 153, 0)','rgb(16, 150, 24)' ,'rgb(153, 0, 153)','rgb(0, 153, 198)'];
   BuHeadCount;
   allDictorateData:{id:number,data:any};
  constructor(public navCtrl: NavController, public navParams: NavParams , public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
this.getExtraTimeWorkedBGDierctorateType();
//this.getDirectorateHeadCount('81');

this.allDictorateData=null;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraTimeDbPage');
    //google.charts.setOnLoadCallback(this.drawChart());
    //google.charts.setOnLoadCallback(this.drawBasic());
  }

 

  async getExtraTimeWorkedBGDierctorateType()
  {
    


    try{
      this.DashbaordProvider.getExtraTimeWorkedBGDierctorateType()
      
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

  getExtraTimeWorkedDepartmentDierctorateType(val ,label,businessGroup: string)
  {
    


    try{
      this.DashbaordProvider.getExtraTimeWorkedDepartmentDierctorateType(businessGroup)
      
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

  drawExtraTimeWorkedDepartmentDierctorateTyp(val ,label,businessGroup)
  {
    this.getExtraTimeWorkedDepartmentDierctorateType(val ,label,businessGroup);
  }






  drawChart( buData) {

    if (!buData)
    return;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'BU');
    data.addColumn('number', 'extratime');
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
      data.addRows([[ buData[i].business_groups,buData[i].extra_time_worked,i , buData[i].business_group_id  ]]);

    }
   
    var options = {
      //'title':'Head Count',
                
                pieHole: 0.6,
                is3D:true,
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
       t.drawExtraTimeWorkedDepartmentDierctorateTyp(value , label ,buId+'');
     
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
    data.addColumn('string', 'Department');
    data.addColumn('number', 'Extra time worked');
    // data.addRows([
    //   ['Arabya', 300 ],
    //   ['HR', 240 ],
    //   ['Production', 270],
    //   ['Operations', 201]
   
    // ]);
var barHeight=0;
    for (var i=0 ; i<BUpersonTypeData.length ; i++)
    {
      data.addRows([[ BUpersonTypeData[i].dept_name,BUpersonTypeData[i].extra_time_worked]]);
      barHeight=barHeight+10;
    }
   

  var color=[];
try{
  color[0]=this.colors[val];
}catch (err)
{
  color[0]='red' ;
}
    var options = {
      title: label+' Extra time worked'
     ,height:350
      ,legend:'none'
     // ,chartArea: {width: '65%'}
     // ,bar: {groupWidth: "55%"}
      ,colors:color,
      hAxis: {
      //  title: 'Total Population',
        minValue: 0
      },
      vAxis: {
       // title: 'City'
       textStyle:{ fontSize: 10}
      },
      animation: {
        duration: 700,
        startup: true
    }
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_div_hc'));

    chart.draw(data, options);

  }

}
