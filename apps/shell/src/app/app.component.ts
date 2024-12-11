import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStoreService } from '@nx-microfrontends-angular/auth-data-access';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [FooterComponent, NavbarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly authStore = inject(AuthStoreService);
}
