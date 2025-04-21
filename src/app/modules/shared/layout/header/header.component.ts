import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CheckMarkComponent } from "../../components/checkMark/checkMark.component";
import { RocketComponent } from "../../components/rocket/rocket.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, RocketComponent],
  templateUrl: './header.component.html',
  styleUrl:"./header.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  scrollToFooter() {
    const footer = document.getElementById('links');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
