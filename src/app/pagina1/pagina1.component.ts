import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
  contactForm : FormGroup;
  private isEmail = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';
  private isTel = '[0-9]{3}-[0-9]{3}-[0-9]{4}';

  constructor(private fb: FormBuilder) { 
    this.contactForm = new FormGroup({
      tel: new FormControl(''),
      correo: new FormControl(''),
      pwd: new FormControl(''),
      pwdc:new FormControl(''),
      nombre: new FormControl(''),
      apPat: new FormControl(''),
      apMat: new FormControl(''),
      cel: new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.initForm();
  }

  onSave(): void{
    if (this.contactForm.valid){
      //NOTIFICACIÓN
      Swal.fire(
        'Datos enviados', 
        '¡Gracias por registrarte!', 
        'success');
      this.contactForm.reset();
    } else {
      Swal.fire(
        'ERROR', 
        'Verifica que tus datos sean correctos.', 
        'error');
    }
  }

  isValidField(field:string): string{
    const validatedField = this.contactForm.get(field);
    return ( !validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }

  private initForm():void{
    /* Definición de campos */
    this.contactForm = this.fb.group({
      tel: ['', [Validators.required, Validators.pattern(this.isTel)]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      pwd: ['', [Validators.required, Validators.minLength(8)]],
      pwdc: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required]],
      apPat: ['', [Validators.required]],
      apMat: ['', [Validators.required]],
      cel: ['', [Validators.required, Validators.pattern(this.isTel)]],
    });
  }
}
