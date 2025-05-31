import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  servicioFormControl = new FormGroup({
    nombre: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    direccion: new FormControl("", Validators.required),
    frecuencia: new FormControl("", Validators.required),
    notificaciones: new FormControl(true, Validators.required),
  });

  onChange() {
    console.log(this.servicioFormControl.value);
  }

  onSubmit() {  
    const form = this.servicioFormControl.value;
    const date = Date.now()
  
    const mensaje = 
      `¡Hola! Quiero solicitar un servicio:%0A` +
      `Nombre: ${form.nombre}%0A` +
      `Email: ${form.email}%0A` +
      `Teléfono: ${form.telefono}%0A` +
      `Dirección: ${form.direccion}%0A` +
      `Frecuencia: ${form.frecuencia}%0A` +
      `¿Recibir notificaciones?: ${form.notificaciones ? 'Sí' : 'No'}%0A` +
      `ID de servicio: ${date}`;
  
    const telefonoWhatsApp = "529999490744"; // 👈 tu número con código país sin signos
  
    const url = `https://wa.me/${telefonoWhatsApp}?text=${mensaje}`;
  
    window.open(url, '_blank');

    this.servicioFormControl.reset({
      notificaciones: true
    });
  }

}
