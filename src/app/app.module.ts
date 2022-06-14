import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficaRedondaComponent } from './graficas/grafica-redonda/grafica-redonda.component';
import { MarcoPaginaPrincipalComponent } from './frames/marco-pagina-principal/marco-pagina-principal.component';
import { FramePrincipalComponent } from './frames/frame-principal/frame-principal.component';
import { FrameMesComponent } from './frames/frame-mes/frame-mes.component';
import { GraficaPrincipalComponent } from './graficas/grafica-principal/grafica-principal.component';
import { BarraInversion1Component } from './graficas/barras-inversion/barra-inversion1/barra-inversion1.component';
import { BarraInversion2Component } from './graficas/barras-inversion/barra-inversion2/barra-inversion2.component';
import { BarraInversion3Component } from './graficas/barras-inversion/barra-inversion3/barra-inversion3.component';
import { BarraInversion4Component } from './graficas/barras-inversion/barra-inversion4/barra-inversion4.component';
import { BarraInversion5Component } from './graficas/barras-inversion/barra-inversion5/barra-inversion5.component';


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
    BarraInversion5Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
