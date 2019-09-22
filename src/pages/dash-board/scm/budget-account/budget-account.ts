import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';
/**
 * Generated class for the BudgetAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import * as $ from 'jquery';


declare var google;
@Component({
  selector: 'page-budget-account',
  templateUrl: 'budget-account.html',
})
export class BudgetAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
   this.getApprovedPo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetAccountPage');
  }

  getApprovedPo()
  {
    


    try{
      this.DashbaordProvider.getApprovedPo()
      
      .then(data => {
       
       
     
      this.drawhHadcountGender(data)
     console.log(data);

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  drawhHadcountGender(Podata) {

    var data = new google.visualization.DataTable();

    data.addColumn('string', 'operating Unit');
    data.addColumn('number', 'Amount');
    data.addColumn('number', 'BilledAmount');
    data.addColumn('number', 'orgid');


    for (let i=0 ;i<Podata.length;i++)
    data.addRows([  [ Podata[i].operatin_unit, Podata[i].amount , Podata[i].amount_billed , Podata[i].operatin_unit_id ] ]); 
    /*Podata[i].budget_amount*/ 
    
     
  
      var options = {
      //  'width':400,
        height:500,
       //colors:['#6633CC','#DD4477'],
        animation: {
          duration: 1000,
          startup: true
      },
        //legend: { position: 'top', maxLines: 3 },
        legend:'none',
        bar: { groupWidth: '85%' },
        isStacked: true
      };
     
      var t=this;
      var chart = new google.visualization.BarChart(document.getElementById('bar_budgt'));
      function selectHandler() {
    
        var selectedItem = chart.getSelection()[0];
      
        console.log(chart.getSelection())
        console.log('selectedItem')
        console.log(chart)
         if (selectedItem) {
           console.log(selectedItem)
         //var value = data.getValue(selectedItem.row, selectedItem.column);
        
       //  var value = data.getValue(selectedItem.row, 2);
         //var label = data.getValue(selectedItem.row, 0);
         var org = data.getValue(selectedItem.row, 3);
         // alert('The user selected ' + value);
          
         // t.drawBasic(value , label );
         //alert (org)
         t.getOperatinUnitBudgetPerAccount(org)
       
        }
      }
      google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
    }

    
    
    getOperatinUnitBudgetPerAccount(organizationId)
  {
    try{
      this.DashbaordProvider.getOperatinUnitBudgetPerAccount(organizationId)
      
      .then(data => {
       
       
        console.log('dataxx');
     
     console.log(data);

     this.drawBudget('chart-div' , data)

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    } 
  }



  drawBudget(PdivId , budgetData) {
    if (!budgetData)
    return;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Acount');
    data.addColumn('number', 'Amount');
    data.addColumn('number', 'BilledAmount');
    data.addColumn('number', 'BudgetAmount');

    
var height=100;
    for (let i=0 ;i<budgetData.length;i++)
    {
    data.addRows([  [ budgetData[i].account, budgetData[i].amount ,  budgetData[i].amount_billed , budgetData[i].budget_amount ] ]); 
    height=height+20;
    }
    // var data = google.visualization.arrayToDataTable([
    //   ['City', '2010 Population', '2000 Population'],
    //   ['New York City, NY', 8175000, 8008000],
    //   ['Los Angeles, CA', 3792000, 3694000],
    //   ['Chicago, IL', 2695000, 2896000],
    //   ['Houston, TX', 2099000, 1953000],
    //   ['Philadelphia, PA', 1526000, 1517000]
    // ]);

    var options = {
      title:'Approved PO vs Billed Amount 2018',
     //height:height,
      chartArea: {width: '60%'},
      // hAxis: {
      //   title: 'Total Population',
      //   minValue: 0
      // },
      // vAxis: {
      //   title: 'City'
      // } , 
      legend:'none'
    };

    var chart = new google.visualization.BarChart(document.getElementById(PdivId));
    chart.draw(data, options);
  }
  
}
