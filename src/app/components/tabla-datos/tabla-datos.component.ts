import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss'],
})
export class TablaDatosComponent implements AfterViewInit, OnChanges {

  @Input() showFilter = false;
  @Input() dataSensores!: any[];

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
    if(changes) {
      this.setDataSource();
    }
  }

  constructor() { }
}
