import { Component, OnInit, Input } from '@angular/core';
import { Adventure } from '../model/adventure';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  @Input() adventure!: Adventure;
  prettyDate!: string;

  constructor() { }

  ngOnInit(): void {
    this.prettyDate = this.adventure.date.toLocaleDateString();
  }

}
