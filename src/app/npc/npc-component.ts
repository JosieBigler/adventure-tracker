import { Component, Input } from "@angular/core";
import { Npc } from "../model/npc";

@Component({
    selector: 'app-npc',
    templateUrl: './npc-component.html',
    styleUrls: ['./npc-component.css']
})
export class NpcComponent{
  @Input() npc!: Npc;

  constructor() { }

}