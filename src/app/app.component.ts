import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  seasons = [
    'unicorn-light-theme',
    'unicorn-dark-theme'
  ];
  value = 'unicorn-light-theme';
}
