import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vacunado } from '../models/vacunado';
import { VacunadoService } from '../services/vacunado.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  vacunadoForm: FormGroup;
  vacunado: Vacunado;
  id: String;
  constructor(private formBuilder: FormBuilder, private vacunadoService: VacunadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.vacunadoService.getVacunado(this.id).subscribe(data =>{
      this.vacunado = data;
      this.vacunadoForm = this.formBuilder.group({
        nombre_vacunado: [this.vacunado.nombre_vacunado, [Validators.required, Validators.nullValidator]],
        id: [this.vacunado.id, [Validators.required, Validators.nullValidator]],
        descripcion: [this.vacunado.descripcion, [Validators.required, Validators.nullValidator]],
        tecnologia: [this.vacunado.tecnologia, [Validators.required, Validators.nullValidator]],
        fecha_de_aceptacion: [this.vacunado.fecha_de_aceptacion, [Validators.required, Validators.nullValidator]]
      });
    })
  }

  get formControls(){
    return this.vacunadoForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarVacunado(){
    if(this.vacunadoForm.invalid){
      return;
    }
    
    const nombre_vacunado = this.vacunadoForm.value.nombre_vacunado;
    const id = this.vacunadoForm.value.id;
    const descripcion = this.vacunadoForm.value.descripcion;
    const tecnologia = this.vacunadoForm.value.tecnologia;
    const fecha_de_aceptacion = this.vacunadoForm.value.fecha_de_aceptacion;

    const vacunadomodificado = {'nombre_vacunado': nombre_vacunado, 'id': id, 'descripcion': descripcion, 'tecnologia': tecnologia, 'fecha_de_aceptacion': fecha_de_aceptacion};
    this.vacunadoService.modificarVacunado(vacunadomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

}
