import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})

// CERTIFICATIONS HELD
// AZ900 AZURE FUNDAMENTALS
// AZ 203 DEVELOPING AZURE SOLUTIONS
export class SkillsComponent {
  techSkills = [
    {
      category: 'Frameworks & UX',
      items: [
        { name: 'Angular', icon: 'angular' },
        { name: 'Vuejs', icon: 'angular' },
        { name: 'BOOTSTRAP 4X', icon: 'angular' },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'HTML 5', icon: 'angular' },
        { name: 'CSS 3', icon: 'angular' },
        { name: 'JAVASCRIPT', icon: 'angular' },
        { name: 'PYTHON', icon: 'angular' },
      ],
    },
    {
      category: 'Deployment & Monitoring',
      items: [
        { name: 'DOCKER', icon: 'angular' },
        { name: 'KUBERNETIS', icon: 'angular' },
        { name: 'APPSERVICE', icon: 'angular' },
        { name: 'AWS S3', icon: 'angular' },
        { name: 'PM2', icon: 'angular' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'POSTGRES', icon: 'angular' },
        { name: 'SQL', icon: 'angular' },
        { name: 'ORACLE SQL', icon: 'angular' },
        { name: 'AZURE STORAGE ADLS', icon: 'angular' },
      ],
    },
  ];

  getFontAwesomeIcon(skillName: string) {
    const iconMap: any = {
      angular: 'angular',
      Vuejs: 'vuejs',
      Bootstrap: 'bootstrap'
    };
    console.log('iconMap[skillName]', iconMap[skillName])
    return iconMap[skillName] || 'question'; // Default icon if not found
  }
}
