import { AuthRepository } from '../../domain/repositories/auth.repository';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) { }

  execute(registration: string, password: string): Observable<void> {
    return this.authRepository.login(registration, password).pipe(
      tap(({ token, user }) => {
        this.authRepository.setToken(token);
        this.authRepository.setUser(user);
      }),
      // Para garantir que o retorno seja `void`, usamos `map` para transformar o valor
      map(() => undefined)
    );
  }
}
