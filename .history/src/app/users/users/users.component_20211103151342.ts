import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IUsers } from '../../interface/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers$!: Observable<IUsers[]>;
  userService!: EntityCollectionService<IUsers>;

  constructor(entityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this.userService = entityCollectionServiceFactory.create<IUsers>("User");
  }

  ngOnInit(): void {
  }

  openModal(): void {

  }

}
