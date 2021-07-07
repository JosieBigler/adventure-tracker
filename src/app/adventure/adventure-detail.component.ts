import { Component, OnInit, Inject } from '@angular/core';
import { Adventure } from '../model/adventure';
import { ActivatedRoute} from '@angular/router';
import {  DataService } from '../adventure-service';

@Component({
  selector: 'app-adventure-detail',
  templateUrl: './adventure-detail.component.html',
  styleUrls: ['./adventure-detail.component.css']
})
export class AdventureDetailComponent implements OnInit {

  adventure: Adventure = {id: 0, title: "", date: new Date()};

  constructor(private route: ActivatedRoute, @Inject(DataService) private adventureService : DataService) {}

  ngOnInit() {
      this.adventure = this.adventureService.getAdventure(this.route.snapshot.params.id);
  };

  saveAdventure(){
      this.adventureService.updateAdventure(this.adventure);
  }

  deleteAdventure(){
      this.adventureService.deleteAdventure(this.adventure);
  }
}



