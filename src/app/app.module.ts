import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { GraficaRedondaComponent } from './grafica-redonda/grafica-redonda.component';
import { BarraInversionComponent } from './barra-inversion/barra-inversion.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    GraficaRedondaComponent,
    BarraInversionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }