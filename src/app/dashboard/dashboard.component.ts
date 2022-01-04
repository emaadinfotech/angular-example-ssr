import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  title = 'Dashboard - Angular Universal CRUD App';

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
      content: 'Dashboard - Add song template',
    });

    this.metaTagService.updateTag({
      name: 'keywords',
      content:
        'Dashboard - Angular SEO Integration, Music CRUD, Angular Universal',
    });

    this.metaTagService.updateTag({
      name: 'author',
      content: 'Dashboard - Tohid Kovadiya',
    });

     this.metaTagService.updateTag({
       name: 'robots',
       content: 'Dashboard - Mozilla',
     });

    this.metaTagService.updateTag({
      name: 'date',
      content: 'Dashboard - 03-01-2022',
    });

  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
