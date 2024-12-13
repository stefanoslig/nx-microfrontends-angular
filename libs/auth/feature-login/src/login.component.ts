import { InputErrorsComponent, ListErrorsComponent } from '@nx-microfrontends-angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthStoreService } from '@nx-microfrontends-angular/auth-data-access';

@Component({
  selector: 'mfa-login',
  templateUrl: './login.component.html',
  imports: [ListErrorsComponent, RouterLink, ReactiveFormsModule, InputErrorsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authStore = inject(AuthStoreService);
  private readonly fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    // this.authStore.login(this.form.getRawValue());
    this.form.reset();
  }
}
