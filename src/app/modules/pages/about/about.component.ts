import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostComponent } from "../../shared/components/post/post.component";

@Component({
  selector: 'about-page',
  imports: [PostComponent],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent { }
