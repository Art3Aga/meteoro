import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  dataFiltro: any[] = [
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 103059, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 4.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 60305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 9.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 103051, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1203057, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1403057, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1503054, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1803054, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
