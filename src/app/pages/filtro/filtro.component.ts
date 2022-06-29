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

  dataFiltro: any[] = [];

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    // this.getData();
    this.getDataFromThingSpeak();
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


  getDataFromThingSpeak() {
    this.dataService.getDataFromThingSpeak().subscribe((data) => {
      const response: any[] = data.feeds;
      this.dataFiltro = response;
    });
  }

  clearFilter() {
    this.filter = '';
    // this.getData();
    this.getDataFromThingSpeak();
  }


}
