import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navLinks: NavLink[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Skills', },
    { path: '/testimonials', label: 'Testimonials' },
  ];
}
