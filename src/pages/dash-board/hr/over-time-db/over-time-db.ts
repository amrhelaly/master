import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {HrDashboardPage} from '../hr-dashboard/hr-dashboard'

/**
 * Generated class for the OverTimeDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import * as $ from 'jquery';
declare var google;
@Component({
  selector: 'page-over-time-db',
  templateUrl: 'over-time-db.html',
})
export class OverTimeDbPage {

  seg: string = "Team";
  isvisted:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverTimeDbPage');
    this.segmentChanged(null);
  }

  segmentChanged( event)
  {
//if (!this.isvisted)
//{

if (event && event._value=='Me')
{
  console.log(event._value);
  this.isvisted=true;
   setTimeout(() => {
      google.charts.setOnLoadCallback(this.drawChart());
    }, 100);
}
else

{
   setTimeout(() => {
      google.charts.setOnLoadCallback(this.drawChart2());
    }, 10);
}

//}
  
}

  drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 5]
    ]);

   
    var options = {'title':'How Much Pizza I Ate Last Night',
                //   'width':400,
                  // 'height':300,
                //    animation: {
                //     duration: 700,
                //     startup: true
                // }
                legend: 'none',
          pieSliceText: 'label',
          slices: {  1: {offset: 0},
                    2: {offset: 0.02},
                    3: {offset: 0.01},
                    4: {offset: 0.02},
          },
                };

  var t=this;
    var chart = new google.visualization.PieChart(document.getElementById('pie_div_o'));

    function selectHandler() {
    
      var selectedItem = chart.getSelection()[0];
    
       if (selectedItem) {
         console.log(selectedItem)
       //var value = data.getValue(selectedItem.row, selectedItem.column);
       var value = data.getValue(selectedItem.row, 0);
        alert('The user selected ' + value);
        
        t.testxx();
     
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
 
    chart.draw(data, options);
  }

  drawChart2() {

   
    var data = google.visualization.arrayToDataTable([
      ['Genre','Annual', 'Toil', 'Sick',{ role: 'annotation' } ],
      ['2020', 10, 24, 20,  'Emad'],
      ['3030', 16, 22, 23,  'rafik'],
      ['4040', 28, 19, 29,  'azmi']
    ]);

    var options = {
    //  'width':400,
     // 'height':300,
      animation: {
        duration: 1000,
        startup: true
    },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '85%' },
      isStacked: true
    };


    var chart = new google.visualization.BarChart(document.getElementById('bar_div_o'));
    chart.draw(data, options);
  }

  testxx()
  {

   // this.navCtrl.push(HrDashboardPage);
   alert ('x');
  }
}
