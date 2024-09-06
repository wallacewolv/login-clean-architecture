import { AuthRepository } from '../../domain/repositories/auth.repository';
import { Observable, of } from 'rxjs';

export class ValidateTokenUseCase {
  constructor(private authRepository: AuthRepository) {}

  execute(): Observable<boolean> {
    const token = this.authRepository.getToken();
    if (token) {
      return this.authRepository.validateToken(token);
    }
    return of(false);
  }
}
