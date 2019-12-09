import { Component } from '@angular/core';

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  title = 'transloco-poc';

  constructor() {
    console.log('LazyComponent loaded');
  }
}
