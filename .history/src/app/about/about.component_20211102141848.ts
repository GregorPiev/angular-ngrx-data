import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAbout } from '../interface/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutContent$!: Observable<IAbout>;
  aboutService: EntityCollectionService<IAbout>;

  constructor() { }

  ngOnInit(): void {
  }

}
