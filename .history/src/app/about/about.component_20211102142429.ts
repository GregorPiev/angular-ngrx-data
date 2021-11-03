import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IAbout } from '../interface/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutContent$!: Observable<IAbout[]>;
  aboutService!: EntityCollectionService<IAbout>;

  constructor(private entityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this.aboutService = entityCollectionServiceFactory.create<IAbout>("about");
    this.aboutContent$ = this.aboutService.entities$;
  }

  ngOnInit(): void {
    this.aboutService.getAll();
  }

}
