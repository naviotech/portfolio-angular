import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'about-page',
  imports: [PostComponent, TranslateModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent {
  translate = inject(TranslateService);
}
