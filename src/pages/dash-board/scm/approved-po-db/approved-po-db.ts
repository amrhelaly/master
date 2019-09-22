import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';

/**
 * Generated class for the ApprovedPoDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@Component({
  selector: 'page-approved-po-db',
  templateUrl: 'approved-po-db.html',
})
export class ApprovedPoDbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
  this.getApprovedPo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovedPoDbPage');
    
  }



  getApprovedPo()
  {
    


    try{
      this.DashbaordProvider.getApprovedPo()
      
      .then(data => {
       
       
     
      this.drawAppovedPo(data)
     console.log(data);

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

   drawAppovedPo(Podata) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'operating Unit');
    data.addColumn('number', 'Amount');
    data.addColumn('number', 'BilledAmount');
    data.addColumn('number', 'Budget');


    for (let i=0 ;i<Podata.length;i++)
    data.addRows([  [ Podata[i].operatin_unit, Podata[i].amount , Podata[i].amount_billed , /*Podata[i].budget_amount*/null ] ]); 

  


    var options = {
      legend: 'none',
      height: 550,
      title:'Approved PO vs Billed Amount 2018',
    //  colors:['red'],
      vAxis: {
              gridlines: {
                          color: 'transparent'
                          }
      }
    };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_po'));
   // var chart = new google.visualization.PieChart(document.getElementById('chart_div_po'));
    function selectHandler() {
  
    var selectedItem = chart.getSelection()[0];
 
    console.log(chart.getSelection())
    console.log('selectedItem')
    console.log(chart)
     if (selectedItem) {
       console.log(selectedItem)
     //var value = data.getValue(selectedItem.row, selectedItem.column);
     // alert (selectedItem);
     var value = data.getValue(selectedItem.row, 1);
     var label = data.getValue(selectedItem.row, 0);
     var buId = data.getValue(selectedItem.row, 1);
   
     // alert('The user selected ' + value);
      
     // t.drawBasic(value , label );
    // t.drawBGpersonType(value , label ,buId+'');
   
    }
  }
  google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
  }

}
