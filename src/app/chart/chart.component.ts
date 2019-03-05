import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/chart.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.associatesByBusinessUnit()
    .subscribe(res =>{
      console.log(Object.values(res));
      let departments = Object.keys(res);
      let employees = Object.values(res);

      this.chart = new Chart('canvas', {
        type:'line',
        data: {
          labels: departments,
          datasets: [
            {
              data:employees,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        }
      })

    })
  }

  associatesByBusinessUnit(){
    
  }

}
