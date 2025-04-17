import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostComponent } from "../../shared/components/post/post.component";

@Component({
  selector: 'education-page',
  imports: [PostComponent],
  templateUrl: './education-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EducationPageComponent { }
