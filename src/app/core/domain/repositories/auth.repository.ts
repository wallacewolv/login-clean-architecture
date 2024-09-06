import { Observable } from 'rxjs';
import { User } from '../entities/user';

export interface AuthRepository {
  login(registration: string, password: string): Observable<{ token: string, user: User }>;
  getToken(): string | null;
  setToken(token: string): void;
  getUser(): User | null;
  setUser(user: User): void;
  validateToken(token: string): Observable<boolean>;
}
