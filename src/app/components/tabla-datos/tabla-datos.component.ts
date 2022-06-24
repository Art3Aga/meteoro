import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataSensor } from 'src/app/models/dataSensor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss'],
})
export class TablaDatosComponent implements AfterViewInit, OnChanges {

  @Input() showFilter = false;
  @Input() dataSensores!: DataSensor[];

  filter: string = '';

  displayedColumns: string[] = ['humedad', 'temperatura', 'presion', 'luz', 'viento', 'fecha'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.setDataSource();
  }

  setDataSource() {
    if (this.dataSensores) {
      this.dataSource = new MatTableDataSource(this.dataSensores);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setDataSource();
    }
  }

  filterByDate(event?: any) {
    this.filter = event.value;
    console.log(event.value);
    let date = new Date(event.value);
    //Convertir end a este formato      año-mes-dia 23:59:59
    
    const start = new Date('2022-06-21 00:00:00');
    const end = new Date('2022-06-21 23:59:59');

    this.dataService.filterByDate(start, end).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

  }

  clearFilter() {
    this.filter = '';
    this.dataSource = new MatTableDataSource(this.dataSensores);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dataService: DataService) { }
}
