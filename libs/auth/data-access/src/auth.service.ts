import { ApiService } from '@nx-microfrontends-angular/http-client';
import {
  User,
  UserResponse,
  LoginUser,
  LoginUserRequest,
  NewUserRequest,
  NewUser,
} from '@nx-microfrontends-angular/api-types';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);

  user(): Observable<UserResponse> {
    return this.apiService.get<UserResponse>('/user');
  }

  update(user: User): Observable<UserResponse> {
    return this.apiService.put('/user', { user });
  }

  login(credentials: LoginUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, LoginUserRequest>('/users/login', { user: credentials });
  }

  register(credentials: NewUser): Observable<UserResponse> {
    return this.apiService.post<UserResponse, NewUserRequest>('/users', { user: credentials });
  }
}
