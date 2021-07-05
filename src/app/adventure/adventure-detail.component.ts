import { Component, OnInit, Input, Inject } from '@angular/core';
import { Adventure } from '../model/adventure';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {  AdventureService } from '../adventure-service';

@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css']
})
export class AdventureDetailComponent implements OnInit {

  id: number = 0;
  adventure?: Adventure;

  constructor(private route: ActivatedRoute, @Inject(AdventureService) private adventureService : AdventureService) {}

ngOnInit() {
  this.id = this.route.snapshot.params.id;
  console.log(this.id);
  let response = this.adventureService.getAdventure(this.id);
  console.log(response);
  this.adventure = response;
  };
}


