import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './modules/shared/layout/header/header.component';
import { FooterComponent } from './modules/shared/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'personal_portfolio';
}
