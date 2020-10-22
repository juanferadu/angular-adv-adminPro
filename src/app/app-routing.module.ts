import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNoticiaComponent } from './pages/crear-noticia/crear-noticia.component';
import { ListarNoticiasComponent } from './pages/listar-noticias/listar-noticias.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'crear-noticia', component: CrearNoticiaComponent },
  { path: 'listar-noticias', component: ListarNoticiasComponent },
  { path: 'home', component: AppComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
