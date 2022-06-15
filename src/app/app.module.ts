import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaRedondaComponent } from './graficas/graficas-redondas/grafica-redonda/grafica-redonda.component';
import { MarcoPaginaPrincipalComponent } from './frames/marco-pagina-principal/marco-pagina-principal.component';
import { FramePrincipalComponent } from './frames/frame-principal/frame-principal.component';
import { FrameMesComponent } from './frames/frame-mes/frame-mes.component';
import { GraficaPrincipalComponent } from './graficas/grafica-principal/grafica-principal.component';
import { BarraInversion1Component } from './graficas/barras-inversion/barra-inversion1/barra-inversion1.component';
import { BarraInversion2Component } from './graficas/barras-inversion/barra-inversion2/barra-inversion2.component';
import { BarraInversion3Component } from './graficas/barras-inversion/barra-inversion3/barra-inversion3.component';
import { BarraInversion4Component } from './graficas/barras-inversion/barra-inversion4/barra-inversion4.component';
import { BarraInversion5Component } from './graficas/barras-inversion/barra-inversion5/barra-inversion5.component';
import { GraficaGastosMensualesComponent } from './graficas/graficas-redondas/grafica-gastos-mensuales/grafica-gastos-mensuales.component';
import { GraficaGastosPersonalesComponent } from './graficas/graficas-redondas/grafica-gastos-personales/grafica-gastos-personales.component';
import { GraficaInversionesComponent } from './graficas/graficas-redondas/grafica-inversiones/grafica-inversiones.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministracionApiService } from './administracion-api.service';
import { MostrarIngresosComponent } from './frames/frame-mes/mostrar-ingresos/mostrar-ingresos.component';
import { MostrarGastosMesComponent } from './frames/frame-mes/mostrar-gastos-mes/mostrar-gastos-mes.component';
import { MostrarGastosOcioComponent } from './frames/frame-mes/mostrar-gastos-ocio/mostrar-gastos-ocio.component';
import { MostrarInversionesComponent } from './frames/frame-mes/mostrar-inversiones/mostrar-inversiones.component';
import { MostrarAhorrosComponent } from './frames/frame-mes/mostrar-ahorros/mostrar-ahorros.component';



@NgModule({
  declarations: [
    AppComponent,
    GraficaRedondaComponent,
    MarcoPaginaPrincipalComponent,
    FramePrincipalComponent,
    FrameMesComponent,
    GraficaPrincipalComponent,
    BarraInversion1Component,
    BarraInversion2Component,
    BarraInversion3Component,
    BarraInversion4Component,
    BarraInversion5Component,
    GraficaGastosMensualesComponent,
    GraficaGastosPersonalesComponent,
    GraficaInversionesComponent,
    MostrarIngresosComponent,
    MostrarGastosMesComponent,
    MostrarGastosOcioComponent,
    MostrarInversionesComponent,
    MostrarAhorrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdministracionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
