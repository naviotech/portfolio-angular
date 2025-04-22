import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';
import { Valid } from '../education/education-page.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'contact-page',
  imports: [PostComponent, TranslateModule],
  templateUrl: './experience-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExperiencePageComponent {
  translate = inject(TranslateService)
  infos = signal<Valid[]>([
    {
      datePost: 'page_experience.one.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/needcarhelp.png',
      containTitle: 'page_experience.one.containTitle',
      containDate: 'page_experience.one.containDate',
      containExplain: 'page_experience.one.containExplain',
      containApt: 'page_experience.one.containApt',
      containAptInfo: 'page_experience.one.containAptInfo',
      comments: 5,
      likes: 35,
      repost: 2,
      graph: 145,
    },
  ]);
}
