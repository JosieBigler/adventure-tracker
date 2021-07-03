import { Component, OnInit, Input } from '@angular/core';
import { Adventure } from '../model/adventure';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css']
})
export class AdventureDetailComponent implements OnInit {
  @Input() adventure!: Adventure;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
  ) {}

ngOnInit() {
  this.id = this.route.snapshot.params.id;
  };
}


