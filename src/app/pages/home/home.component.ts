import { AfterViewInit, Component } from '@angular/core';
import { DataSensor } from 'src/app/models/dataSensor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  dataSensores: DataSensor[] = [];

  constructor(private dataService: DataService) { }

  ngAfterViewInit(): void {
    this.getData();
  }


  getData() {
    this.dataService.getData().subscribe((data) => {
      this.dataSensores = data;
      this.dataSensores.map(item => item.fecha = `${new Date(item.fecha.seconds * 1000).toLocaleDateString()} ${new Date(item.fecha.seconds * 1000).toLocaleTimeString()}`);
    });
  }

}
