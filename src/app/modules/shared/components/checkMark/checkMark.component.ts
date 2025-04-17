import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'check-mark',
  imports: [],
  templateUrl: './checkMark.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    style: 'margin-top: calc(var(--spacing) * -1)'
  }
})
export class CheckMarkComponent { }
