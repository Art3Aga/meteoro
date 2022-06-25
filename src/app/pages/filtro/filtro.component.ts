import { AfterViewInit, Component } from '@angular/core';
import { DataSensor } from 'src/app/models/dataSensor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements AfterViewInit {

  filter: string = '';

  dataFiltro: any[] = [
    // { humedad: 80.00, temperatura: 20.00, presion: 10.059, luz: 28.44, viento: 29.46, fecha: '9/6/22 20:45' },
    // { humedad: 85.00, temperatura: 27.00, presion: 4.0305, luz: 28.44, viento: 49.46, fecha: '9/6/22 20:45' },
    // { humedad: 80.00, temperatura: 25.00, presion: 60.305, luz: 28.44, viento: 19.46, fecha: '9/6/22 20:45' },
    // { humedad: 80.00, temperatura: 37.00, presion: 9.0305, luz: 28.44, viento: 35.46, fecha: '9/6/22 20:45' },
    // { humedad: 50.00, temperatura: 17.00, presion: 10.3051, luz: 28.44, viento: 33.46, fecha: '9/6/22 20:45' },
    // { humedad: 80.00, temperatura: 22.00, presion: 13.057, luz: 28.44, viento: 38.46, fecha: '9/6/22 20:45' },
    // { humedad: 60.00, temperatura: 25.00, presion: 14.057, luz: 28.44, viento: 31.46, fecha: '9/6/22 20:45' },
    // { humedad: 79.00, temperatura: 28.00, presion: 15.054, luz: 28.44, viento: 30.46, fecha: '9/6/22 20:45' },
    // { humedad: 75.00, temperatura: 30.00, presion: 18.054, luz: 28.44, viento: 29.46, fecha: '9/6/22 20:45' }
  ];

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.getData();
  }


  getData() {
    this.dataService.getDataPromise().then(data => {
      if (data.docs.length > 0) {
        this.dataFiltro = data.docs.map(doc => doc.data());
        this.dataFiltro.forEach(item => item.fecha = `${new Date(item.fecha.seconds * 1000).toLocaleDateString()} ${new Date(item.fecha.seconds * 1000).toLocaleTimeString()}`);
      }
    });
  }

  filterByDate(event?: any) {
    this.filter = event.value;
    let date = new Date(event.value);

    const fechaInicio = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00:00`;
    const fechaFin = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 23:59:59`;

    const start = new Date(fechaInicio);
    const end = new Date(fechaFin);

    this.dataService.filterByDate(start, end).subscribe((data) => {
      data.forEach(item => item.fecha = `${new Date(item.fecha.seconds * 1000).toLocaleDateString()} ${new Date(item.fecha.seconds * 1000).toLocaleTimeString()}`);
      /* this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; */
      this.dataFiltro = data;
    });

  }

  clearFilter() {
    this.filter = '';
    this.getData();
  }

}
