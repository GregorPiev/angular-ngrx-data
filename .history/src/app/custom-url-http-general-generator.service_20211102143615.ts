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

    console.info('%cEntity Name:' + entityName, 'color: green font-size: 18px;');

    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (entityName == 'about') {
      const url = 'http://localhost:3000/abouts/'
      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }

}