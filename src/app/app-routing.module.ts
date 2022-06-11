import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltroComponent } from './pages/filtro/filtro.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'filtro', component: FiltroComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
