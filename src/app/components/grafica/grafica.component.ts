import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataSensor } from 'src/app/models/dataSensor.model';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit, OnChanges {

  @Input() dataSensores: DataSensor[] = [];
  humedades: any[] = [];
  temperaturas: any[] = [];
  vientos: any[] = [];
  presiones: any[] = [];
  luces: any[] = [];
  fechas: any[] = [];

  chartData: ChartDataSets[] = [];

  chartLabels: Label[] = [];

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
    this.humedades = this.dataSensores.map(data => Number(data.humedad));
    this.temperaturas = this.dataSensores.map(data => Number(data.temperatura));
    this.vientos = this.dataSensores.map(data => Number(data.viento));
    this.luces = this.dataSensores.map(data => Number(data.luz));
    this.presiones = this.dataSensores.map(data => Number(data.presion));
    this.fechas = this.dataSensores.map(data => data.fecha);


    this.chartData = [
      { data: this.humedades, label: 'Humedad', fill: false },
      { data: this.temperaturas, label: 'Temperatura', fill: false },
      { data: this.vientos, label: 'Viento', fill: false },
      { data: this.presiones, label: 'Presion', backgroundColor: '#C9DA88', borderColor: '#A6C43F', fill: false },
      { data: this.luces, label: 'Luz', fill: false }
    ];
    this.chartLabels = this.fechas;
  }
}
