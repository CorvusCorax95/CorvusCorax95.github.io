import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
      const heroes = [{ id: 100, name: 'Rashena', class: 'Warlock', race: 'Tiefling', armour: 14 },
      { id: 101, name: 'Ancalimon', class: 'Wizard', race: 'Darkelf', armour: 12 },
      { id: 102, name: 'Phaphneo', class: 'Sorcerer', race: 'Elf', armour: 10 },
      { id: 103, name: 'Crona', class: 'Rouge', race: 'Half-Elf', armour: 12 },
      { id: 104, name: 'Sebastian', class: 'Paladin', race: 'Human', armour: 18 },
      { id: 105, name: 'Fordal', class: 'Bard', race: 'Dragonborn', armour: 14 }];
      return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
  }
}
