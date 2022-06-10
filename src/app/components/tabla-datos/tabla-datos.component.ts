import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss'],
})
export class TablaDatosComponent implements AfterViewInit {
  data: any[] = [
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 103059, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 4.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 60305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 9.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 103051, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1203057, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1403057, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1503054, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 1803054, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 20.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 22.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 240305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 26.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 28.0305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 3003058, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 303055, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 350305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 390305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 3903053, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
    { humedad: '80.00%', temperatura: '27.00 °C', presion: 400305, luz: '28.44%', viento: '39.46 km/h', fecha: '9/6/22 20:45' },
  ];

  displayedColumns: string[] = ['humedad', 'temperatura', 'presion', 'luz', 'viento', 'fecha'];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {}
}
