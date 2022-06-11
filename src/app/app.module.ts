import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Angular Material Componentes
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


//Modulo de Grafica
import { ChartsModule } from 'ng2-charts';

import { TablaDatosComponent } from './components/tabla-datos/tabla-datos.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { HomeComponent } from './pages/home/home.component';
import { DataService } from './services/data.service';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FiltroComponent } from './pages/filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaDatosComponent,
    GraficaComponent,
    HomeComponent,
    FiltroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [
    DataService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-Es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
