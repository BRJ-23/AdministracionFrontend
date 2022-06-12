import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FramePrincipalComponent } from './frames/frame-principal/frame-principal.component';
import { FrameMesComponent } from './frames/frame-mes/frame-mes.component';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full'},
  { path: 'principal', component: FramePrincipalComponent },
  { path: 'mes', component: FrameMesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
