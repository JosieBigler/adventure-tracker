import { Component } from '@angular/core';
import { Adventure } from './model/adventure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adventure-tracker';

  adventures : Adventure[] = [
    {
      title: "Testing my first Adventure",
      date: new Date().toLocaleString()
    },
    {
      title: "Two objects",
      date: "6/30/2021"
    }
  ]
}



