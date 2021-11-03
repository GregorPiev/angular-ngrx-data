import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { userEntityMetaData } from './user-entity-metadata';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    BrowserModule
  ],
  providers: []
})
export class UsersModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(userEntityMetaData)
  }
}
