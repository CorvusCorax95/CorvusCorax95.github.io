import { Component, OnInit } from '@angular/core';

import{ Hero } from '../hero';
import{ HEROES } from '../mock-heroes';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  /**
  hero: Hero = {
    id: 0,
    name: 'You',
    race: 'Human',
    class: 'Peasant',
    armour: 5
  };
  */

  /**
   * Actual Injection of heroService happens here
   */
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /**
   * Lifecycle hook. Angular calls it after creating a component.
   * Good for initialization logic
   */
  ngOnInit(): void {
    this.getHeroes();
  }
  /**
   * Cleaned up after adding Navigation
   */
  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  */
  /**
   * subscribing to the service. Without the subscribe it assigns an array of heroes to the component heroes.
   * this way everything happens asynchronyously and nothing freezes.
   */
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name:string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
