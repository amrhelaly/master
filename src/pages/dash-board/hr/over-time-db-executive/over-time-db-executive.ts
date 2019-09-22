import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';

import * as $ from 'jquery';


declare var google;

/**
 * Generated class for the OverTimeDbExecutivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-over-time-db-executive',
  templateUrl: 'over-time-db-executive.html',
})
export class OverTimeDbExecutivePage {
  colors=['#990099','#3366CC','#DC3912','#FF9900','#109618','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC'];
   
  //colors=['rgb(51, 102, 204)' , 'rgb(220, 57, 18)','rgb(255, 153, 0)','rgb(16, 150, 24)' ,'rgb(153, 0, 153)','rgb(0, 153, 198)'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
 
 this.getOverTimeMonthsDirectorateType();
  }

  ionViewDidLoad() {
  
  }

  async getOverTimeMonthsDirectorateType()
  {
    


    try{
      this.DashbaordProvider.getOverTimeMonthsDirectorateType()
      
      .then(data => {
       
       
      
      this.drawChart(data)
    

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }
  drawChart( buData) {

    if (!buData)
    return;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'month');
    data.addColumn('number', 'amount');
    data.addColumn('number', 'id');
    data.addColumn('string', 'MonthNo');
    data.addColumn('string', 'year');
    /*data.addRows([
      ['DXB', 1264 ,1],
      ['EG', 401 ,2],
      ['KSA', 600,3],
      ['Jor', 324,4],
      ['LEB',136,5]
    ]);*/
    for (var i=0 ; i<buData.length ; i++)
    {
      data.addRows([[ buData[i].month,buData[i].amount,i , buData[i].month_no+'' , buData[i].year+''  ]]);

    }
   
    var options = {
      //'title':'Head Count',
                
             //   pieHole: 0.6,
               // is3D:true,
               legend: {
                 position:'top',
                 maxLines:3
               },
               colors:this.colors,
         // pieSliceText: 'value-and-percentage',
          // slices: {  1: {offset: 0},
          //           2: {offset: 0.02},
          //           3: {offset: 0.01},
          //           4: {offset: 0.02},
          // },
                };

  var t=this;
    var chart = new google.visualization.PieChart(document.getElementById('pie_div_overtime'));

    function selectHandler() {
    
      var selectedItem = chart.getSelection()[0];
    
       if (selectedItem) {
       
       //var value = data.getValue(selectedItem.row, selectedItem.column);
       var value = data.getValue(selectedItem.row, 2);
       var label = data.getValue(selectedItem.row, 0);
       var monthNo = data.getValue(selectedItem.row, 3);
       var year = data.getValue(selectedItem.row, 4);
       // alert('The user selected ' + value);
        
       // t.drawBasic(value , label );
       t.drawOverTimeDepartments(value , label ,year+'',monthNo+'');
     
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
 
    chart.draw(data, options);
  }
  drawOverTimeDepartments(val ,label,year,monthNo)
  {
    this.getOverTimeMonthDepartments(val ,label,year,monthNo);
  }

  getOverTimeMonthDepartments(val ,label,year: string,monthNo: string)
  {
    


    try{
      this.DashbaordProvider.getOverTimeMonthDepartments(year,monthNo)
      
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
  drawBasic(val , label , overTimeDepartmentData) {

    // var data = google.visualization.arrayToDataTable([
    //   ['Diectorate', 'Head count'],
    //   ['Arabya', 300],
    //   ['HR', 240],
    //   ['Production', 270],
    //   ['Operations', 201]
     
    // ]);
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Departmnt');
    data.addColumn('number', 'amount');
    // data.addRows([
    //   ['Arabya', 300 ],
    //   ['HR', 240 ],
    //   ['Production', 270],
    //   ['Operations', 201]
   
    // ]);
var barHeight=0;
    for (var i=0 ; i<overTimeDepartmentData.length ; i++)
    {
      data.addRows([[ overTimeDepartmentData[i].dept_name,overTimeDepartmentData[i].amount]]);
      barHeight=barHeight+30;
    }
   

  var color=[];
  
try{
  color[0]=this.colors[val];
  if (!color[0])
  {
    color[0]='red' ;
  }
}catch (err)
{
  alert (err)
  color[0]='red' ;
}

    var options = {
      //title: label+' Directories Head Count'
      height:250
      ,legend:'none'
      ,chartArea: {width: '65%'},
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
        duration: 700,
        startup: true
    }
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_div_overtime'));

    chart.draw(data, options);

  
  }

}
