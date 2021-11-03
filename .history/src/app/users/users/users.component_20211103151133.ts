import { Component, OnInit } from '@angular/core';
import { EntityCollectionService } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IUsers } from '../../interface/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers$: Observable<IUsers[]>;
  userService: EntityCollectionService<IUsers>;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {

  }

}
