import { Component, ViewChild } from '@angular/core';
import  {NavController, NavParams } from 'ionic-angular';

import { SshrLeavesProvider } from '../../../providers/sshr-leaves/sshr-leaves';

import * as $ from 'jquery';
import { ChartsModule } from 'ng2-charts';
import 'chart.piecelabel.js';
import { AppModule } from '../../../app/app.module';
//import { Chart } from 'chart.js';
/**
 * Generated class for the LeaveBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-leave-balance',
  templateUrl: 'leave-balance.html',
})

export class LeaveBalancePage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  seg: string = "Annual";


  public chartType: string = 'pie';
  public chartLabels: Array<string> = ['January', 'February', 'March'];
  public chartData: Array<number> = [1, 1, 1];

  public chartOptions: any = {
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
      //  render:'lavel'
      //  function (args) {
      //   const label = args.label,
      //         value = args.value;
      //  return 'label' + 'percentage' ;
      // }
    }
  };


  public doughnutChartLabelsAnuual: string[];
  public doughnutChartvaluesAnuual: number[];

  public doughnutChartLabelsToil: string[];
  public doughnutChartvaluesToil: number[];

  public doughnutChartColors: any[] = [
    {
      // backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
      backgroundColor: ["red", "#353D4e"],
      fontColor: ["gray", "#008AE6"]
    }];
  public doughnutChartType: string = 'doughnut';
  public pieChartType: string = 'pie';




  userId: string;
  personId: string;
  businessGroup: string;
  assignmentId: string;
  isdisplayed: boolean = false;
  isdisplayedt: boolean = false;
  toilTabdisplayed: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public leavesHistory: SshrLeavesProvider) {




    if (AppModule.getProperty('bu') == '81') {

      this.toilTabdisplayed = true;

    }


    // annual
    try {
      this.leavesHistory.getAnnualLeavesBalance()

        .then(data => {

          this.doughnutChartLabelsAnuual = [];
          this.doughnutChartLabelsAnuual[0] = data[0].taken_txt;
          this.doughnutChartLabelsAnuual[1] = data[0].available_txt;

          this.doughnutChartvaluesAnuual = [];
          this.doughnutChartvaluesAnuual[0] = data[0].taken_no;
          this.doughnutChartvaluesAnuual[1] = data[0].available_no;




          this.isdisplayed = true;

        });
    }
    catch (error) {

      alert('Connection Problem');
    }
    // this.doughnutChartLabelsAnuual=[];
    //       this.doughnutChartLabelsAnuual[0]='Taken (12) ';
    //    this.doughnutChartLabelsAnuual[1]='Available (19)';


    //  this.doughnutChartvaluesAnuual=[];
    //  this.doughnutChartvaluesAnuual[0]=12;
    //   this.doughnutChartvaluesAnuual[1]=19;


    // toil
    try {
      this.leavesHistory.getToilBalance()

        .then(data => {

          this.doughnutChartLabelsToil = [];
          this.doughnutChartLabelsToil[0] = data[0].taken_txt;
          this.doughnutChartLabelsToil[1] = data[0].available_txt;

          this.doughnutChartvaluesToil = [];
          this.doughnutChartvaluesToil[0] = data[0].taken_no;
          this.doughnutChartvaluesToil[1] = data[0].available_no;




          this.isdisplayedt = true;

        });
    }
    catch (error) {

      alert('Connection Problem');
    }



    // toil
    this.doughnutChartLabelsToil = [];
    this.doughnutChartLabelsToil[0] = 'Taken (15) ';
    this.doughnutChartLabelsToil[1] = 'Available (17)';


    this.doughnutChartvaluesToil = [];
    this.doughnutChartvaluesToil[0] = 15;
    this.doughnutChartvaluesToil[1] = 17;












  }




  ionViewDidLoad() {





    // try{
    //     this.leavesHistory.getAnnualLeavesBalance(this.personId)

    //     .then(data => {

    //      this.doughnutChartLabels= [];


    //      this.doughnutChartLabels[0]=data[0].available_txt;
    //      this.doughnutChartLabels[1]=data[0].taken_txt;


    //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    //     type: 'pie',
    //     data: {
    //         labels: ["Taken (12) ", "Available (19)"],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19],
    //             backgroundColor: [
    //                 'gray',
    //                 '#008AE6'

    //             ],
    //             hoverBackgroundColor: [
    //                 "#565656",
    //                 "#36A2EB"

    //             ]
    //         }]
    //     },
    //     options: {

    //   }

    // });






    // catch (error)
    // {

    //   alert('Connection Problem');
    // }


    // this.doughnutChartLabels= [];
    // this.doughnutChartLabels[0]='dddd';
    // this.doughnutChartLabels[1]='ggg';




  }



  // events
  public chartClicked(e: any): void {

  
  }

  public chartHovered(e: any): void {
    
  }


  xx() {

    var data = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ]
    };
    /*
    var pieOptions = {
      events: false,
      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
    
          this.data.datasets.forEach(function (dataset) {
    
            for (var i = 0; i < dataset.data.length; i++) {
              var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                  total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                  mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                  start_angle = model.startAngle,
                  end_angle = model.endAngle,
                  mid_angle = start_angle + (end_angle - start_angle)/2;
    
              var x = mid_radius * Math.cos(mid_angle);
              var y = mid_radius * Math.sin(mid_angle);
    
              ctx.fillStyle = '#fff';
              if (i == 3){ // Darker text color for lighter background
                ctx.fillStyle = '#444';
              }
              var percent = String(Math.round(dataset.data[i]/total*100)) + "%";
              ctx.fillText(dataset.data[i], model.x + x, model.y + y);
              // Display percent in another line, line break doesn't work for fillText
              ctx.fillText(percent, model.x + x, model.y + y + 15);
            }
          });               
        }
      }
    };
    
    var pieChartCanvas = $("#pieChart");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie', // or doughnut
      data: data,
      options: pieOptions
    });
    
    }
    
    */
    /*
    
     drawSegmentValues()
    {
        
      
      //var canvas = document.getElementById("canvas");
      var ctx =this.doughnutCanvas.nativeElement;
      var midX = 40;
      var midY = 80;
      var totalValue = 50;
      var radius = this.doughnutCanvas.outerRadius;
      
      for(var i=0; i<this.doughnutCanvas.nativeElement; i++) 
        {
           
         // alert (i+'d');
          ctx.fillStyle="white";
            var textSize = 600/15;
            ctx.font= textSize+"px Verdana";
            // Get needed variables
            var value = this.doughnutCanvas.segments[i].value/totalValue*100;
            // if(Math.round(value) !== value)
            // 	value = (this.doughnutCanvas.segments[i].value/totalValue*100).toFixed(1);
            // value = value + '%';
            value=15;
            var startAngle = this.doughnutCanvas.segments[i].startAngle;
            var endAngle = this.doughnutCanvas.segments[i].endAngle;
            var middleAngle = startAngle + ((endAngle - startAngle)/2);
    
            // Compute text location
            var posX = (radius/2) * Math.cos(middleAngle) + midX;
            var posY = (radius/2) * Math.sin(middleAngle) + midY;
    
            // Text offside by middle
            var w_offset = ctx.measureText(value).width/2;
            var h_offset = textSize/4;
    
            ctx.fillText(value, posX - w_offset, posY + h_offset);
        }
    }
    
    */
  }

}
