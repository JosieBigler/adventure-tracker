import { Injectable } from "@angular/core";
import { Adventure } from "./model/adventure";
import { Npc } from "./model/npc";

@Injectable()
export class DataService {
    adventures: Adventure[] = [
      {
        id: 1,
        title: "Testing my first Adventure that's really fricking long",
        date: new Date()
      },
      {
        id: 2,
        title: "Two objects",
        date: new Date("6/30/2021")
      },
      {
        id: 3,
        title: "third adventure",
        date: new Date("6/22/2021")
      }
    ]

    npcs: Npc[] = [
      {
        id: 1,
        name: "Bill"
      },
      {
        id: 2,
        name: "Jim"
      }
    ]

    addAdventure(adventure: Adventure){
      adventure.id = this.adventures.length + 1;
      this.adventures.push(adventure);
    }

    getAdventures(): Adventure[]{
      return this.adventures;
    }

    getAdventure(id: number): Adventure {
      return this.adventures.find(x => x.id == id) || {id: 0, title: "", date: new Date()}
    }

    updateAdventure(adventure: Adventure){
      let index = this.adventures.findIndex(adv => adv.id == adventure.id);
      if(index > -1){
        this.adventures[index] = adventure; 
      }
    }

    deleteAdventure(adventure: Adventure) {
      let index = this.adventures.findIndex(adv => adv.id == adventure.id);
      if(index > -1){
        this.adventures.splice(index, 1);
      }
    }

    getNpcs(): Npc[]{
      return this.npcs;
    }

    getNpc(id: number): Npc {
      return this.npcs.find(x => x.id ==id) || { id: 0, name: "" };
    }
  }