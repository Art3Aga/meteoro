import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit, OnChanges {

  chartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C' }
  ];

  chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartLegend = true;

  chartType = 'line';

  chartPlugins = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.setData();
    }
  }

  ngOnInit(): void {
    this.setData()
  }

  setData() {
    // this.humedad = this.dataAspersor.map(data => data.humedad);
    // this.temperatura = this.dataAspersor.map(data => data.temperatura);
    // this.lineChartData = [ { data: this.humedad, label: 'Humedad' }, { data: this.temperatura, label: 'Temperatura' },  ]
    // this.lineChartLabels = this.dataAspersor.map(data => data.date);
  }

}
