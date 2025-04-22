import { ThemeService } from '@/app/theme.service';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'rocket',
  imports: [CommonModule],
  templateUrl: './rocket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rocket.css'],
})
export class RocketComponent implements OnInit {
  clouds: any[] = [];
  smokeTrail: any[] = [];
  stars: any[] = [];
  numberOfStars = 100;

  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.generateClouds(10);
    this.generateSmokeTrail(20);
    this.generateStars();
  }

  generateClouds(count: number): void {
    this.clouds = Array.from({ length: count }, () => ({
      scale: (Math.random() * 0.6 + 0.7).toFixed(2),
      opacity: (Math.random() * 0.5 + 0.5).toFixed(2),
      delay: `${(Math.random() * 3).toFixed(2)}s`,
      duration: `${(Math.random() * 3 + 2).toFixed(2)}s`,
      left: `${Math.random() * 100}%`,
    }));
  }
  generateSmokeTrail(count: number) {
    this.smokeTrail = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 20 - 10,
      delay: i * 0.2,
      scale: (Math.random() * 0.5 + 0.8).toFixed(2),
    }));
  }

  generateStars(): void {
    for (let i = 0; i < this.numberOfStars; i++) {
      this.stars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        animationDelay: `${Math.random() * 1}s`,
      });
    }
  }
}
