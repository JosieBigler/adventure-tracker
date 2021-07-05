import { Injectable } from "@angular/core";
import { Adventure } from "./model/adventure";


@Injectable()
export class AdventureService {
    adventures: Adventure[] = [
      {
        id: 1,
        title: "Testing my first Adventure that's really fricking long",
        date: new Date().toLocaleString()
      },
      {
        id: 2,
        title: "Two objects",
        date: "6/30/2021"
      },
      {
        id: 3,
        title: "third adventure",
        date: "6/22/2021"
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
      return this.adventures.find(x => x.id == id) || {id: 0, title: "", date: ""}
    }
  }