import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RocketComponent } from '../../components/rocket/rocket.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@/app/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RocketComponent, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent implements OnInit {
  currentLang = signal<string>(localStorage.getItem('lang') || 'es');
  themeService = inject(ThemeService);
  translate = inject(TranslateService)

  constructor() {
    this.translate.setDefaultLang('es');
    this.translate.use(this.currentLang());
    effect(() => {
      const lang = this.currentLang();
      this.translate.use(lang);
    });
  }

  @ViewChild('dropdownContainer') dropdownRef!: ElementRef;

  scrollToFooter() {
    const footer = document.getElementById('links');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isOpen = false;
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.currentLang.set(lang);
  }

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
  ]);

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.dropdownRef?.nativeElement.contains(
      event.target
    );
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    const theme = this.themeService.getCurrentTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
