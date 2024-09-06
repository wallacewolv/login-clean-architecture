import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/application/services/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  registration = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.registration, this.password).pipe(
      tap(() => console.log('Login realizado com sucesso!'))
    ).subscribe();
  }
}
