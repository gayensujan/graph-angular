import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolComponent } from './pol/pol.component';
import { RaderComponent } from './rader/rader.component';

const routes: Routes = [
  {
  path:'',redirectTo:'pol',pathMatch:'full'
  },
  {
    path:'pol',component:PolComponent
  },
  {
    path:'pie-chart',component:PieChartComponent
  },
  {
    path:'rader',component:RaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
