import { Component } from '@angular/core';

@Component({
  selector: 'lazy-button',
  templateUrl: './lazy-button.component.html',
  styleUrls: ['./lazy-button.component.scss']
})
export class LazyButtonComponent {

  constructor() {
    console.log('LazyButtonComponent loaded');
  }
}
