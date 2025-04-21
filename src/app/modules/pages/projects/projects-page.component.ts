import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostComponent } from "../../shared/components/post/post.component";

@Component({
  selector: 'projects-page',
  imports: [PostComponent],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProjectsPageComponent { }
