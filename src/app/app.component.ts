import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bobs-computer-repair';

  constructor() {
    this.title = "Bob's Computer Repair";
  }
}
