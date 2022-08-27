import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    
  });

  constructor(private formBuilder:FormBuilder, private alert: MatSnackBar, private router:Router) { 
    
  }

  // Validaciones
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: ['' , Validators.required],
      password: ['' , [Validators.required , Validators.minLength(5)]],
    });
  }
  
  // Enviar formulario
  submit(){

    const usuario = this.formLogin.value.user;
    const contraseña = this.formLogin.value.password;

   if (usuario == 'Administrador' && contraseña == 'Admin123') {
    this.router.navigate(['/inicio'])
  }else{
    this.error();
  }
  
}

error (){ 
  this.alert.open('Usuario o contraseña incorrecta', 'Cerrar', {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
  });
} 
}
