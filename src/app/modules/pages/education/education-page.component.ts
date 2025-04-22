import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PostComponent } from '../../shared/components/post/post.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface Valid {
  datePost: string;
  imageProfile: string;
  imagePost: string;
  containTitle: string;
  containDate: string;
  containExplain: string;
  containApt: string;
  containAptInfo: string;
  comments: number;
  likes: number;
  repost: number;
  graph: number;
  urlGitPost?: string;
  urlProyectPost?: string;
}
@Component({
  selector: 'education-page',
  imports: [PostComponent, TranslateModule],
  templateUrl: './education-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EducationPageComponent {
  translate = inject(TranslateService);
  infos = signal<Valid[]>([
    {
      datePost: 'page_education.one.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'page_education.one.containTitle',
      containDate: 'page_education.one.containDate',
      containExplain: 'page_education.one.containExplain',
      containApt: 'page_education.one.containApt',
      containAptInfo: 'page_education.one.containAptInfo',
      comments: 16,
      likes: 52,
      repost: 14,
      graph: 305,
    },
    {
      datePost: 'page_education.two.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'page_education.two.containTitle',
      containDate: 'page_education.two.containDate',
      containExplain: 'page_education.two.containExplain',
      containApt: 'page_education.two.containApt',
      containAptInfo: 'page_education.two.containAptInfo',
      comments: 14,
      likes: 28,
      repost: 9,
      graph: 114,
    },
    {
      datePost: 'page_education.three.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/nebrija.png',
      containTitle: 'page_education.three.containTitle',
      containDate: 'page_education.three.containDate',
      containExplain: 'page_education.three.containExplain',
      containApt: 'page_education.three.containApt',
      containAptInfo: 'page_education.three.containAptInfo',
      comments: 1,
      likes: 42,
      repost: 6,
      graph: 230,
    },
    {
      datePost: 'page_education.four.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/logo-udemy.png',
      containTitle: 'page_education.four.containTitle',
      containDate: 'page_education.four.containDate',
      containExplain: 'page_education.four.containExplain',
      containApt: 'page_education.four.containApt',
      containAptInfo: 'page_education.four.containAptInfo',
      comments: 2,
      likes: 24,
      repost: 3,
      graph: 169,
    },
    {
      datePost: 'page_education.five.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/harvard.png',
      containTitle: 'page_education.five.containTitle',
      containDate: 'page_education.five.containDate',
      containExplain: 'page_education.five.containExplain',
      containApt: 'page_education.five.containApt',
      containAptInfo: 'page_education.five.containAptInfo',
      comments: 8,
      likes: 32,
      repost: 7,
      graph: 201,
    },
    {
      datePost: 'page_education.six.datePost',
      imageProfile: 'assets/img/web.jpg',
      imagePost: './assets/img/conquer.png',
      containTitle: 'page_education.six.containTitle',
      containDate: 'page_education.six.containDate',
      containExplain: 'page_education.six.containExplain',
      containApt: 'page_education.six.containApt',
      containAptInfo: 'page_education.six.containAptInfo',
      comments: 6,
      likes: 16,
      repost: 3,
      graph: 167,
    },
  ]);
}
