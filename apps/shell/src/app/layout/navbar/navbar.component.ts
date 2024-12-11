import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@nx-microfrontends-angular/api-types';

@Component({
  standalone: true,
  selector: 'cdt-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly user = input.required<User>();
  readonly isLoggedIn = input.required<boolean>();
}
