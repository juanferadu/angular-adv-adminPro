import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { RestService } from '../../service/rest.service';
import { Noticia } from '../../models/Noticia';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent  {

  noticia: Noticia;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private apiService: RestService) { 

      this.noticia = new Noticia();

    }


  onSubmit() { 

    //console.log('No puede ir vacio los campos');

    this.apiService.CrearNoticia(this.noticia)
      .subscribe( data => {
        this.router.navigate(['listar-noticias']);
      });
  }

}