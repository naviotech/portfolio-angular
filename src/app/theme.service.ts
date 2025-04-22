import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  private savedTheme = localStorage.getItem('theme');

  #currentTheme = signal<string>(
    this.savedTheme || (this.prefersDark ? 'dark' : 'light')
  );

  constructor() {
    if (this.savedTheme) {
      document.documentElement.classList.toggle('dark', this.savedTheme === 'dark');
    } else {
      document.documentElement.classList.toggle('dark', this.prefersDark);
      localStorage.setItem('theme', this.prefersDark ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    this.#currentTheme.set(newTheme);
  }

  getCurrentTheme(): string {
    return this.#currentTheme();
  }
}
