import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { CheckMarkComponent } from "../checkMark/checkMark.component";
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'post-component',
  imports: [CheckMarkComponent, NgClass, TranslateModule],
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  translate = inject(TranslateService)
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

  plusOrRest = signal(false)

  ngOnInit(): void {
    this.likesPlus.set(this.likes());
  }

  setLike(number:number){
    if(!this.plusOrRest()){
      this.likesPlus.update(data => data + number)
      this.plusOrRest.set(true)
    }else{
      this.likesPlus.update(data => data - number)
      this.plusOrRest.set(false)
    }

  }
}
