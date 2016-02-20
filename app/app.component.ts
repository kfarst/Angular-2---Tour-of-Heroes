import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: HEROES;

  constructor (private _heroService: HeroService) {
  }

  ngOnInit () {
    this.getHeroes();
  }

  getHeroes () {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect (hero: Hero) {
    this.selectedHero = hero;
  }
}
