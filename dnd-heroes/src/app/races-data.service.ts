import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class RacesDataService implements InMemoryDbService{
  createDb() {
      const races = ['Dragonborn','Dwarf', 'Elf', 'Half-Elf', 'Dark-Elf', 'Gnome', 'Halfling','Human', 'Tiefling', 'Half-Orc', 'Tabaxi'];
      return {races};
  }
  genId(races: Race[]): number {
    return races.length > 0 ? Math.max(...races.map(hero => hero.id))+1:11;
  }
}
