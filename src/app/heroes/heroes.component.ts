import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  title = 'Hero - Angular Universal CRUD App';

  constructor(
    private heroService: HeroService,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.getHeroes();

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Hero - Add New Hero',
    });

     this.metaTagService.updateTag({
       name: 'keywords',
       content: 'Hero - Angular SEO Integration, Music CRUD, Angular Universal',
     });

    this.metaTagService.updateTag({
      name: 'author',
      content: 'Hero - Tohid Kovadiya',
    });

    this.metaTagService.updateTag({
      name: 'robots',
      content: 'Hero - Chrome',
    });

    this.metaTagService.updateTag({
      name: 'date',
      content: 'Hero - 03-01-2022',
    });

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
