import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CheckMarkComponent } from "../checkMark/checkMark.component";

@Component({
  selector: 'post-component',
  imports: [CheckMarkComponent],
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  pinned = input(false)
  imageProfile = input.required<string>()
  contain = input.required<string>()
  imagePost = input<string>()
}
