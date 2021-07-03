import { Component, OnInit, Input } from '@angular/core';
import { Adventure } from '../model/adventure';

@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css']
})
export class AdventureDetailComponent implements OnInit {
  @Input() adventure!: Adventure;
  
  constructor() { }

  ngOnInit(): void {
  }

}
