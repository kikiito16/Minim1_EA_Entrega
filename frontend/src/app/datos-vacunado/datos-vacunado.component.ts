import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacunado } from '../models/vacunado';

@Component({
  selector: 'app-datos-vacunado',
  templateUrl: './datos-vacunado.component.html',
  styleUrls: ['./datos-vacunado.component.css']
})
export class DatosVacunadoComponent implements OnInit {

  @Input()
  vacunado: Vacunado;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
    this.router.navigate(['/' + this.vacunado.id]);
  }

}
