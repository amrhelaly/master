import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AbsencCalendarDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import * as $ from 'jquery';


declare var google;

@Component({
  selector: 'page-absenc-calendar-db',
  templateUrl: 'absenc-calendar-db.html',
})
export class AbsencCalendarDbPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbsencCalendarDbPage');
    google.charts.setOnLoadCallback(this.drawChart());
  }

  drawChart() {

    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();


    var options = {
       width:1000,
       //'height':600,
       legend :{position:'none'},
       animation: {
         duration: 1500,
         startup: true
     },
       //title: 'MBC HeadCount',
       hAxis: {title: 'Head Count'},
       vAxis: {title: 'Ranking'},
       bubble: {textStyle: {fontSize: 11}}
     };
 

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'string', id: 'name' });
   dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    
    dataTable.addRows([
      [ 'Emad', 'Emad' , new Date(2019, 0, 1), new Date(2019, 0, 4) ],
        [ 'Emad','Emad' ,new Date(2019, 2, 21), new Date(2019, 2, 23) ],
          [ 'Rami', 'Rami' ,new Date(2019, 1, 5), new Date(2019, 1, 7) ],
            [ 'Rafik', 'Rafik' ,new Date(2019, 1, 7), new Date(2019, 1, 10) ],
                [ 'Azmi', 'Azmi' ,new Date(2019, 0, 31), new Date(2019, 1, 5) ],
                    [ 'Amr', 'Amr' ,new Date(2019, 2, 10), new Date(2019, 2, 15) ],
                    [ 'Heba', 'Heba' ,new Date(2019, 1, 1), new Date(2019, 2, 20) ],
                [ 'Jasmina', 'Jasmina' ,new Date(2019, 2, 15), new Date(2019, 2, 30) ],
                    [ 'Mahmoud','Mahmoud' , new Date(2019, 0, 1), new Date(2019, 1, 4) ]
                   
      ]);

    chart.draw(dataTable,options);

  }

}
