import { Injectable, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerStoreService {
  readonly #router = inject(Router);

  readonly #code = signal(-1);
  public code = this.#code.asReadonly();

  readonly #message = signal<string | undefined>(undefined);
  public message = this.#message.asReadonly();

  public handleError401(error: HttpErrorResponse) {
    this.#code.set(error.status);
    this.#message.set(error.message);
    this.#router.navigate(['/login']);
  }

  public handleError404(error: HttpErrorResponse) {
    this.#code.set(error.status);
    this.#message.set(error.message);
    this.#router.navigate(['/']);
  }
}
