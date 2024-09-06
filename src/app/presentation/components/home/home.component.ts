import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/application/services/auth/auth.service';
import { User } from '../../../core/domain/entities/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
