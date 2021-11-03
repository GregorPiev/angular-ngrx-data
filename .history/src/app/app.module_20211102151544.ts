import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule, EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { aboutEntityMetaData } from './about/about-entity-metadata';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CustomUrlHttpGeneralGeneratorService } from './custom-url-http-general-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    MessagesModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    })
  ],
  providers: [
    {
      provide: HttpUrlGenerator, useClass: CustomUrlHttpGeneralGeneratorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(aboutEntityMetaData);
  }
}
