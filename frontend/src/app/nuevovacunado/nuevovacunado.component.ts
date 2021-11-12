import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacunadoService } from '../services/vacunado.service';

@Component({
  selector: 'app-nuevovacunado',
  templateUrl: './nuevovacunado.component.html',
  styleUrls: ['./nuevovacunado.component.css']
})
export class NuevoVacunadoComponent implements OnInit {

  vacunadoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private vacunadoService: VacunadoService, private router: Router) { }

  ngOnInit(): void {
    this.vacunadoForm = this.formBuilder.group({
      nombre_vacunado: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      tecnologia: ['', [Validators.required, Validators.nullValidator]],
      fecha_de_aceptacion: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.vacunadoForm.controls;
  }

  nuevoVacunado(): void{
    if(this.vacunadoForm.invalid){
      return;
    }
    const nombre_vacunado = this.vacunadoForm.value.nombre_vacunado;
    const id = this.vacunadoForm.value.id;
    const descripcion = this.vacunadoForm.value.descripcion;
    const tecnologia = this.vacunadoForm.value.tecnologia;
    const fecha_de_aceptacion = this.vacunadoForm.value.fecha_de_aceptacion;

    console.log(nombre_vacunado);

    const vacunado = {'nombre_vacunado': nombre_vacunado, 'id': id, 'descripcion': descripcion, 'tecnologia': tecnologia, 'fecha_de_aceptacion': fecha_de_aceptacion};
    this.vacunadoService.nuevoVacunado(vacunado).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}
