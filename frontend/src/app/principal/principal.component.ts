import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacunado } from '../models/vacunado';
import { VacunadoService } from '../services/vacunado.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  vacunados: Vacunado[];
  constructor(private vacunadoService: VacunadoService, private router: Router) { }

  ngOnInit(): void {
    this.vacunadoService.getVacunados().subscribe(data =>{
      this.vacunados = data;
      console.log(this.vacunados);
    })
  }

  nuevoVacunado(){
    this.router.navigateByUrl('/nuevovacunado');
  }

}
