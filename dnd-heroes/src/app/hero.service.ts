import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

/**
 * Injectable means that this class participades in the dependency injection system.
 * To make it available you need to register a provider, here 'root'.
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService:MessageService) { }

  /**
   * Making the Hero[] to an Observable, we get an asynchonously result that will not block the server.
   * @returns Emits hust a single value (the mock heroes array)
   */
  getHeroes(): Observable<Hero []> {
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: fetched heroes`);
    return heroes;
  }
  /**
   * Backticks `` define a JavaScript Template literal for embedding an id.
   */
  getHero(id: number): Observable<Hero> {
    ;const hero = HEROES.find(h => h.id ===id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
