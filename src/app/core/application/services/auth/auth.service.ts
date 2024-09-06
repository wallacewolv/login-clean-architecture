import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ValidateTokenUseCase } from '../../use-cases/validate-token.use-case';
import { LoginUseCase } from '../../use-cases/login.use-case';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private validateTokenUseCase: ValidateTokenUseCase,
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {}

  checkAuth(): Observable<void> {
    return this.validateTokenUseCase.execute().pipe(
      tap(isValid => {
        if (isValid) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      }),
      // Mapear para `void` para garantir o retorno correto
      map(() => undefined)
    );
  }

  login(registration: string, password: string): Observable<void> {
    return this.loginUseCase.execute(registration, password).pipe(
      tap(() => this.router.navigate(['/home']))
    );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
