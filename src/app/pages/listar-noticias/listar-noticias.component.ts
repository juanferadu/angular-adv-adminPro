import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { RestService } from '../../service/rest.service';
import { map } from 'rxjs/operators';
import { Noticia } from '../../models/Noticia';

@Component({
  selector: 'app-listar-noticias',
  templateUrl: './listar-noticias.component.html',
  styleUrls: ['./listar-noticias.component.css']
})
export class ListarNoticiasComponent {

  title = 'app';
  noticias: Noticia[];
  isSolicitud: Promise<boolean>;
  showResolucion: boolean;
  showDetalle: boolean;
  noticia: Noticia;

  constructor(
    private restService: RestService,
    private router: Router 
  ) { 

    this.consultarNoticias();
  }

  public consultarNoticias() {
    
    this.restService.obtenerNoticias()
      .subscribe(resultado => {
        
        this.noticias = resultado['noticias'];
        console.log(resultado);

       
      });
  }

  addUser(): void {
    this.router.navigate(['crear-noticia']);
  };

  listar(): void {
    this.router.navigate(['listar-noticia']);
  };

}
