import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Observable } from 'rxjs';
import { IUsers } from '../../interface/users.interface';
declare var window: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  allUsers$!: Observable<IUsers[]>;
  userService!: EntityCollectionService<IUsers>;

  myModal: any;
  deleteModal: any;

  userForm: IUsers = {
    fname: '',
    id: 0
  };

  modalTitle: string = '';
  userIdToDelete: number = 0;

  constructor(entityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this.userService = entityCollectionServiceFactory.create<IUsers>("User");
    this.allUsers$ = this.userService.entities$;
  }

  ngOnInit(): void {
    this.userService.getAll();
  }

  openModal(idUser: number): void {

  }

  onDelete(): void {

  }

  saveOrUpdate(): void {

  }

}
