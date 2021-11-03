import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";

@Injectable({
  providedIn: 'root'
})
export class CustomUrlHttpGeneralGeneratorService extends DefaultHttpUrlGenerator {

  constructor(private myPluralizer: Pluralizer) {
    super(myPluralizer)
  }

  protected getResourceUrls(
    entityName: string,
    root: string
  ): HttpResourceUrls {

    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (entityName == 'about') {
      const url = 'http://localhost:3000/about/'
    }
  }

}