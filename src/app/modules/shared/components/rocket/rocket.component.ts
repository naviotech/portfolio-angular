import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'rocket',
  imports: [CommonModule],
  templateUrl: './rocket.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rocket.css'],
})
export class RocketComponent implements OnInit {
  clouds: any[] = [];

  ngOnInit(): void {
    this.generateClouds(10);
    this.generateSmokeTrail(20);
  }

  generateClouds(count: number): void {
    this.clouds = Array.from({ length: count }, () => ({
      scale: (Math.random() * 0.6 + 0.7).toFixed(2), // 0.7 - 1.3
      opacity: (Math.random() * 0.5 + 0.5).toFixed(2), // 0.5 - 1
      delay: `${(Math.random() * 3).toFixed(2)}s`, // 0 - 3s
      duration: `${(Math.random() * 3 + 2).toFixed(2)}s`, // 2 - 5s
      left: `${Math.random() * 100}%`,
    }));
  }


  smokeTrail: any[] = [];

  generateSmokeTrail(count: number) {
    this.smokeTrail = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 20 - 10, // ligera variación horizontal
      delay: i * 0.2,             // separación en el tiempo
      scale: (Math.random() * 0.5 + 0.8).toFixed(2)
    }));
  }
}
