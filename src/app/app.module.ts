import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolComponent } from './pol/pol.component';
import { ChartModule } from 'primeng/chart';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RaderComponent } from './rader/rader.component';


@NgModule({
  declarations: [
    AppComponent,
    PolComponent,
    PieChartComponent,
    RaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
