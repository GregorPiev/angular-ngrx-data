import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { userEntityMetaData } from './user-entity-metadata';
import { UserUrlHttpGeneralGeneratorService } from './user-url-http-general-generator.service';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    {
      provide: HttpUrlGenerator, useClass: UserUrlHttpGeneralGeneratorService
    }
  ]
})
export class UsersModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(userEntityMetaData)
  }
}
