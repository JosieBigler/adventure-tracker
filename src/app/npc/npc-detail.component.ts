import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../adventure-service";
import { Npc } from "../model/npc";

@Component({
  templateUrl: 'npc-detail.component.html',
  selector: 'app-npc-detail'
})
export class NpcDetailComponent implements OnInit {
  npc!: Npc;

  constructor(private route: ActivatedRoute, @Inject(DataService) private dataService: DataService) { }

  ngOnInit() {
      this.npc = this.dataService.getNpc(this.route.snapshot.params.id);
  }
}