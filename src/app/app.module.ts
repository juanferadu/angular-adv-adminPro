import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routes
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearNoticiaComponent } from './pages/crear-noticia/crear-noticia.component';
import { ListarNoticiasComponent } from './pages/listar-noticias/listar-noticias.component';
import { RestService } from './service/rest.service';
import {Router, RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    CrearNoticiaComponent,
    ListarNoticiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'crear-noticias', component: CrearNoticiaComponent},
      {path: 'listar-noticias', component: ListarNoticiasComponent},
      {path: '', redirectTo: '/listar-noticias', pathMatch: 'full'},
    ]),
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
