import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostComponent } from "../../shared/components/post/post.component";

@Component({
  selector: 'contact-page',
  imports: [PostComponent],
  templateUrl: './experience-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ExperiencePageComponent { }
