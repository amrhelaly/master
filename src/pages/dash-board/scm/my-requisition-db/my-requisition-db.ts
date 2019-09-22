import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import {DashbaordProvider} from '../../../../providers/dashbaord/dashbaord';
import {AlertController } from 'ionic-angular';
import { AppModule } from '../../../../app/app.module';
/**
 * Generated class for the MyRequisitionDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-my-requisition-db',
  templateUrl: 'my-requisition-db.html',
})
export class MyRequisitionDbPage {
poData;
constructor(public navCtrl: NavController, public navParams: NavParams ,public DashbaordProvider: DashbaordProvider , public AlertController :AlertController) {
  this.getApprovedPo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRequisitionDbPage');

    //google.charts.setOnLoadCallback(this.drawChart());
    //google.charts.setOnLoadCallback(this.drawChart2());
    // setTimeout(() => {
    //   this.drawChart();
    // }, 1000);
  
    
  }

  getApprovedPo()
  {
    


    try{
      this.DashbaordProvider.getApprovedPo()
      
      .then(data => {
       
       
     
     this.poData=data;
     console.log(data);

      });
    }
    catch (error)
    {
     
      AppModule.showMessage(this.AlertController,'Error:'+error)
      
    }
  }

  getOperatinUnitBudgetPerAccount(organizationId , index)
  {
    try{
      this.DashbaordProvider.getOperatinUnitBudgetPerAccount(organizationId)
      
      .then(data => {
       
       
        console.log('dataxx');
     
     console.log(data);

     this.drawBudget('chart-div'+index , data)

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
  onPoCkicked(index,poData)
  {

console.log(poData);
if (poData && poData.operatin_unit_id)
this.getOperatinUnitBudgetPerAccount(poData.operatin_unit_id,index);
  }

}
