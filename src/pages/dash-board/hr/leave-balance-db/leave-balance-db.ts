import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import * as $ from 'jquery';
import { ChartsModule } from 'ng2-charts';
import 'chart.piecelabel.js';

import * as $ from 'jquery';
declare var google;

/**
 * Generated class for the LeaveBalanceDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leave-balance-db',
  templateUrl: 'leave-balance-db.html',
})
export class LeaveBalanceDbPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  seg: string = "Team";
  public doughnutChartvaluesAnuual: any[];
  
  public doughnutChartColors: any[] = [
    {
      backgroundColor: ["red", "#353D4e"],
      fontColor: ["gray", "#008AE6"]
    }];

    public doughnutChartLabelsAnuual: string[];
    public doughnutChartLabels: string[];
    public doughnutChartType: string = 'horizontalBar';//'doughnut';

    public chartOptions: any ;
    public doughnutChartOptions: any ;

    public datasets : {label :string,data :number[],backgroundColor:string}[];
    public datax:any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chartOptions  ={
      scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
  };

  this.doughnutChartOptions={
    pieceLabel: {
     render: 'value',
      fontColor: ['white', 'white'],
      fontStyle: 'bold',
      fontSize: '12',
      // arc :true ,
      position: 'border ',
      legend: {
        onClick: null


      }
    }
  };
/*
this.datax={
  labels: ['Standing costs', 'Running costs'], // responsible for how many bars are gonna show on the chart

  datasets: [{
     label: 'Washing and cleaning',
     data: [0, 8],
     backgroundColor: '#22aa99'
  }, {
     label: 'Traffic tickets',
     data: [0, 2],
     backgroundColor: '#994499'
  }, {
     label: 'Tolls',
     data: [0, 1],
     backgroundColor: '#316395'
  }, {
     label: 'Parking',
     data: [5, 2],
     backgroundColor: '#b82e2e'
  }, {
     label: 'Car tax',
     data: [0, 1],
     backgroundColor: '#66aa00'
  }, {
     label: 'Repairs and improvements',
     data: [0, 2],
     backgroundColor: '#dd4477'
  }, {
     label: 'Maintenance',
     data: [6, 1],
     backgroundColor: '#0099c6'
  }, {
     label: 'Inspection',
     data: [0, 2],
     backgroundColor: '#990099'
  }, {
     label: 'Loan interest',
     data: [0, 3],
     backgroundColor: '#109618'
  }, {
     label: 'Depreciation of the vehicle',
     data: [0, 2],
     backgroundColor: '#109618'
  }, {
     label: 'Fuel',
     data: [0, 1],
     backgroundColor: '#dc3912'
  }, {
     label: 'Insurance and Breakdown cover',
     data: [4, 0],
     backgroundColor: '#3366cc'
  }]
};
*/
    this.doughnutChartvaluesAnuual=[];
    this.doughnutChartvaluesAnuual[0] = 12;
    this.doughnutChartvaluesAnuual[1] = 19;
    this.doughnutChartvaluesAnuual[2] = 15;
    this.doughnutChartLabelsAnuual=[];
    this.doughnutChartLabelsAnuual[0] ='Emad';
    this.doughnutChartLabelsAnuual[1] = 'Rafik';
    this.doughnutChartLabelsAnuual[2] = 'Mahmoud';
    this.doughnutChartLabelsAnuual[3] = 'Jasmina';
    this.doughnutChartLabelsAnuual[4] = 'Rami';
    this.doughnutChartLabelsAnuual[5] = 'Heba';
    this.doughnutChartLabelsAnuual[6] = 'Amr';


    this.doughnutChartLabels=[];
    this.doughnutChartLabels[0]='Annual';
    this.doughnutChartLabels[1]='Sick';
    this.doughnutChartLabels[2]='Toil';
    

    
    this.datasets=[];
   // this.datasets[0] =xx; 

   this.datasets = [
      {
        label: 'Annual Leave',
        data: [17,12,21,14,5,17,18],
        backgroundColor: '#FF0000' 
      },
      {
        label: 'Sick Leave',
        data: [5,12,1,14,15,7,10],
        backgroundColor: '#FAEBCC' 
      },
      {
        label: 'Toil',
        data: [3,19,4,14,25,17,18],
        backgroundColor: '#FF0000' 
      }
    ]
    }
  
  
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveBalanceDbPage');
   
  // google.charts.setOnLoadCallback(this.drawChart2());
    // setTimeout(() => {
    //   google.charts.setOnLoadCallback(this.drawChart());
    // }, 3000);
    this.segmentChanged(null);
  }

  segmentChanged( event)
  {

if (event && event._value=='Me')
{
  console.log(event._value);
   setTimeout(() => {
      google.charts.setOnLoadCallback(this.drawChart());
    }, 10);
}
else
//if (event._value=='Team')
{
   setTimeout(() => {
      google.charts.setOnLoadCallback(this.drawChart2());
    }, 10);
}
//google.charts.setOnLoadCallback(this.drawChart());
  //   setTimeout(() => {
  //     google.charts.setOnLoadCallback(this.drawChart());
  //   }, 1);
  
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

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                  // 'width':400,
                  // 'height':300,
                   animation: {
                    duration: 700,
                    startup: true
                }
                };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('bar_div'));
  //  var chart = new google.visualization.PieChart(this.doughnutCanvas.nativeElement);
    chart.draw(data, options);
  }

  drawChart2() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
      ['Genre','Annual', 'Toil', 'Sick',{ role: 'annotation' } ],
      ['2020', 10, 24, 20,  'Emad'],
      ['3030', 16, 22, 23,  'rafik'],
      ['4040', 28, 19, 29,  'azmi']
    ]);

    var options = {
      // width: '100%',
      // height: 400,
      animation: {
        duration: 1000,
        startup: true
    },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '85%' },
      isStacked: true
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('bar_div2'));
  //  var chart = new google.visualization.PieChart(this.doughnutCanvas.nativeElement);
    chart.draw(data, options);
  }

}
