import { Injectable } from '@angular/core';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { Observable } from 'rxjs';
import { User } from '../../domain/entities/user';
import { LocalStorageService } from '../providers/localstorage/localstorage.service';
import { HttpService } from '../providers/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRepositoryImpl implements AuthRepository {
  constructor(
    private localStorage: LocalStorageService,
    private http: HttpService
  ) {}

  login(registration: string, password: string): Observable<{ token: string, user: User }> {
    return this.http.post('/login', { registration, password });
  }

  getToken(): string | null {
    return this.localStorage.getItem('authToken');
  }

  setToken(token: string): void {
    this.localStorage.setItem('authToken', token);
  }

  getUser(): User | null {
    const userData = this.localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

  setUser(user: User): void {
    this.localStorage.setItem('user', JSON.stringify(user));
  }

  validateToken(token: string): Observable<boolean> {
    return this.http.post('/validate-token', { token });
  }
}
