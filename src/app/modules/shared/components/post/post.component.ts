import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { CheckMarkComponent } from "../checkMark/checkMark.component";

@Component({
  selector: 'post-component',
  imports: [CheckMarkComponent],
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  isProyect = input<boolean>(false)
  isProyectUrl = input<string>("")
  isProyectGit = input<string>("")

  date = input.required<string>()
  pinned = input(false)
  imageProfile = input.required<string>()
  contain = input.required<string>()
  imagePost = input<string>()

  comments = input<number>(12)
  likes = input<number>(34)
  likesPlus = signal(0);
  repost = input<number>(2)
  graph = input<number>(203)

  ngOnInit(): void {
    this.likesPlus.set(this.likes());
  }
  setLike(number:number){
    this.likesPlus.update(data => data + number)
  }
}
