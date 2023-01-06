import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular100day';
  counter = 1;
  questions = {
      question1: true,
      question2:false,
  }
}
