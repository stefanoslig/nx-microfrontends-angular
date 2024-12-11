import { Injectable, signal } from '@angular/core';
import { initialUserValue } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthStoreService {
  readonly #loggedIn = signal(false);
  public loggedIn = this.#loggedIn.asReadonly();

  readonly #user = signal(initialUserValue);
  public user = this.#user.asReadonly();
}
