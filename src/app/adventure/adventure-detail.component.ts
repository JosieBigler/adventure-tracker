import { Component, OnInit, Inject } from '@angular/core';
import { Adventure } from '../model/adventure';
import { ActivatedRoute} from '@angular/router';
import {  AdventureService } from '../adventure-service';

@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css']
})
export class AdventureDetailComponent implements OnInit {

  adventure: Adventure = {id: 0, title: "", date: new Date()};

  constructor(private route: ActivatedRoute, @Inject(AdventureService) private adventureService : AdventureService) {}

ngOnInit() {
  this.adventure = this.adventureService.getAdventure(this.route.snapshot.params.id);
  };

  saveAdventure(){
      console.log("does this trigger?");
      this.adventureService.updateAdventure(this.adventure);
  }

  deleteAdventure(){
      this.adventureService.deleteAdventure(this.adventure);
  }
}



