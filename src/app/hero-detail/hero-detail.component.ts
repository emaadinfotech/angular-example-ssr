import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;

  title = 'Hero Detail - Angular Universal CRUD App';

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit(): void {
    this.getHero();

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Hero Detail - Add song template',
    });

    this.metaTagService.updateTag({
      name: 'keywords',
      content:
        'Hero Detail - Angular Universal',
    });

    this.metaTagService.updateTag({
      name: 'author',
      content: 'Hero Detail - Tohid M K',
    });

     this.metaTagService.updateTag({
       name: 'robots',
       content: 'Hero Detail - Chrome',
     });

    this.metaTagService.updateTag({
      name: 'date',
      content: 'Hero Detail - 04-01-2022',
    });

  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
